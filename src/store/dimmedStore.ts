import { create } from 'zustand';

type Props = {
  dimmed: boolean
  setDimmed: (dimmed: boolean) => void
}


export const useDimmed = create<Props>((set) => ({
  dimmed: false,
  setDimmed: (dimmed: boolean) => set({ dimmed }),
}));
