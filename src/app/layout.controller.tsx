'use client';

import { useEffect } from 'react';
import { useGetCurrentUser } from '@/utils/useGetCurrentUser.util';
import { useGetCurrentUserStore } from '@/models/CurrentUser.model';
import { Loader } from '@/components/Loader/Loader.comp';

interface Props {
  children: React.ReactNode;
}

export const LayoutController = ({ children }: Props) => {
  const { currentUser, isCurrentUserLoading } = useGetCurrentUser();
  const { setCurrentUser } = useGetCurrentUserStore();

  useEffect(() => {
    if (currentUser?.data) {
      setCurrentUser(currentUser.data);
    }
  }, [currentUser]);

  if (isCurrentUserLoading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
};
