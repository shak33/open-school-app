import { create } from 'zustand';
import { CurrentUserDto } from '@/api/generated/models';

interface CurrentUserStore {
  currentUser: CurrentUserDto | null;
  setCurrentUser: (currentUser: CurrentUserDto | null) => void;
}

export const useGetCurrentUserStore = create<CurrentUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (currentUser) => set({ currentUser }),
}));
