import { create } from 'zustand';

type Props = {
  gameDatas: boolean
  setGameDatas: (gameData: boolean) => void
}


export const useSetGameDatas = create<Props>((set) => ({
  gameDatas: false,
  setGameDatas: (gameDatas: boolean) => set({ gameDatas }),
}));
