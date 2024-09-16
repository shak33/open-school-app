import { useQuery } from '@tanstack/react-query';
import { QueryKeyEnum } from '@/api/models/QueryKey.enum';
import { AxiosError } from 'axios';
import { MeResponseDto } from '@/api/generated/models';
import { useMeApiClient } from '@/api/utils/useMeApiClient.util';

export type Return = {
  currentUser: MeResponseDto | null;
  isCurrentUserLoading: boolean;
  isCurrentUserError: boolean;
};

export const useGetCurrentUser = (): Return => {
  const { meApiClient } = useMeApiClient();
  const { data, isLoading, isError } = useQuery<MeResponseDto, AxiosError>({
    queryKey: [QueryKeyEnum.ME],
    queryFn: async () => {
      const { data } = await meApiClient.me();

      return data;
    },
  });

  return {
    currentUser: data ?? null,
    isCurrentUserLoading: isLoading,
    isCurrentUserError: isError,
  };
};
