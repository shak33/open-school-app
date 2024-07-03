'use client';

import { useEffect } from 'react';
import { useGetCurrentUser } from '@/utils/useGetCurrentUser.util';
import { useGetCurrentUserStore } from '@/models/CurrentUser.model';
import { Navbar } from '@/components/Navbar/Navbar.comp';

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
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
