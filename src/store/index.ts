import { create } from 'zustand';

export const useStore = create((set) => ({
  teamId: '',
  setTeamId: (teamId: string) => set({ teamId }),
}));
