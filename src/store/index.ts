import { create } from 'zustand';

const useStore = create((set) => ({
  teamId: '',
  setTeamId: (teamId: string) => set({ teamId }),
}));
