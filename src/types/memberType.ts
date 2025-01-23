type MemberStatus = 'normal' | 'dormant' | 'waiting';
type MemberRole = 'president' | 'member';
type Position =
  | 'guard'
  | 'forward'
  | 'center'
  | 'point-guard'
  | 'shooting-guard'
  | 'small-forward'
  | 'power-forward';
export const POSITION_LIST: { [key in Position]: string } = {
  guard: '가드',
  forward: '포워드',
  center: '센터',
  'point-guard': '포인트 가드',
  'shooting-guard': '슈팅 가드',
  'small-forward': '스몰 포워드',
  'power-forward': '파워 포워드',
};
export type Member = {
  id: string;
  name: string;
  position?: Position[];
  playStyle?: string;
  backNumber?: string;
  status: MemberStatus;
  role: MemberRole;
  birthDate?: string;
  height?: number;
  weight?: number;
  imageUrl?: string;
  phoneNumber?: string;
  gameData?: MemberGameStats;
};

export type MemberGameStats = {
  win?: number;
  totalGame?: number;
  attendance?: number;
};
