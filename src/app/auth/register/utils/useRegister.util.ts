import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  RegisterRequestDto,
  RegisterResponseDataDto,
} from '@/api/generated/models';
import { useAuthApiClient } from '@/api/utils/useAuthApiClient.util';

type Return = {
  register: (req: RegisterRequestDto) => Promise<RegisterResponseDataDto>;
  isRegisterLoading: boolean;
  isRegisterError: boolean;
};

export const useRegister = (): Return => {
  const { authApiClient } = useAuthApiClient();

  const { mutateAsync, isPending, isError } = useMutation<
    RegisterResponseDataDto,
    AxiosError,
    RegisterRequestDto
  >({
    mutationFn: async (req) => {
      const { data } = await authApiClient.register({
        email: req.email,
        password: req.password,
        firstName: req.firstName,
        lastName: req.lastName,
      });

      return data.data;
    },
  });

  return {
    register: mutateAsync,
    isRegisterLoading: isPending,
    isRegisterError: isError,
  };
};
