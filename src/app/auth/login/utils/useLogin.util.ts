import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { LoginRequestDto, LoginResponseDto } from '@/api/generated/models';
import { useAuthApiClient } from '@/api/utils/useAuthApiClient.util';

type Return = {
  login: (req: LoginRequestDto) => Promise<LoginResponseDto>;
  isLoginLoading: boolean;
  isLoginError: boolean;
};

export const useLogin = (): Return => {
  const { authApiClient } = useAuthApiClient();

  const { mutateAsync, isPending, isError } = useMutation<
    LoginResponseDto,
    AxiosError,
    LoginRequestDto
  >({
    mutationFn: async (req) => {
      const { data } = await authApiClient.login({
        email: req.email,
        password: req.password,
      });

      return data;
    },
  });

  return {
    login: mutateAsync,
    isLoginLoading: isPending,
    isLoginError: isError,
  };
};
