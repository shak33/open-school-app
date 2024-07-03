import { create } from 'zustand';
import { MeResponseDataDto } from '@/api/generated/models';

interface CurrentUserStore {
  currentUser: MeResponseDataDto | null;
  setCurrentUser: (currentUser: MeResponseDataDto | null) => void;
}

export const useGetCurrentUserStore = create<CurrentUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (currentUser) => set({ currentUser }),
}));
