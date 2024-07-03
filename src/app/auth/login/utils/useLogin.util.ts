import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { LoginRequestDto, LoginResponseDataDto } from '@/api/generated/models';
import { useAuthApiClient } from '@/api/utils/useAuthApiClient.util';

type Return = {
  login: (req: LoginRequestDto) => Promise<LoginResponseDataDto>;
  isLoginLoading: boolean;
  isLoginError: boolean;
};

export const useLogin = (): Return => {
  const { authApiClient } = useAuthApiClient();

  const { mutateAsync, isPending, isError } = useMutation<
    LoginResponseDataDto,
    AxiosError,
    LoginRequestDto
  >({
    mutationFn: async (req) => {
      const { data } = await authApiClient.login({
        email: req.email,
        password: req.password,
      });

      return data.data;
    },
  });

  return {
    login: mutateAsync,
    isLoginLoading: isPending,
    isLoginError: isError,
  };
};
