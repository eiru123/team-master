type MemberStatus = 'normal' | 'dormant' | 'waiting';
type MemberRole = 'president' | 'member';

type MemberBasicInfo = {
  id: string;
  name: string;
  imageUrl?: string;
  birthDate?: string;
  height?: number;
  weight?: number;
  position?: string[];
  playStyle?: string;
  backNumber?: number;
  description?: string;
  status: MemberStatus;
  phoneNumber?: string;
  role: MemberRole;
};

type MemberGameStats = {
  win?: number;
  winRate?: number;
  totalGame: number;
  attendance?: number;
  attendanceRate?: number;
};

export type Member = MemberBasicInfo & MemberGameStats;
