type MemberBasicInfo = {
  id: string;
  name: string;
  imageUrl?: string;
  age?: number;
  height?: number;
  weight?: number;
  position?: string;
  playStyle?: string;
  number?: number;
  description?: string;
};

type MemberGameStats = {
  win?: number;
  winRate?: number;
  totalGame: number;
  attendance?: number;
  attendanceRate?: number;
};

export type Member = MemberBasicInfo & MemberGameStats;
