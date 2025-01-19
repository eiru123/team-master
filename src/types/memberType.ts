type MemberStatus = 'normal' | 'dormant' | 'waiting';
type MemberRole = 'president' | 'member';

export type Member = {
  id: string;
  name: string;
  userInfo: MemberUserInfo;
  position?: string[];
  playStyle?: string;
  backNumber?: string;
  description?: string;
  status: MemberStatus;
  role: MemberRole;
  gameData?: MemberGameStats;
};

export type MemberUserInfo = {
  birthDate?: string;
  height?: number;
  weight?: number;
  imageUrl?: string;
  phoneNumber?: string;
};

export type MemberGameStats = {
  win?: number;
  totalGame?: number;
  attendance?: number;
};
