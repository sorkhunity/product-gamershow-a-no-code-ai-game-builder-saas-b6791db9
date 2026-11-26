export interface Game {
  id: string;
  title: string;
  status: 'published' | 'draft' | 'review';
  downloads: number;
  revenue: number;
  category: string;
  created_at?: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  popular?: boolean;
  features: string[];
}

export interface StudioAsset {
  id: string;
  name: string;
  type: 'character' | 'obstacle' | 'background' | 'sound';
  url: string;
  prompt: string;
}

export interface MultiplayerRoom {
  id: string;
  name: string;
  gameTitle: string;
  playersCount: number;
  maxPlayers: number;
  ping: number;
  host: string;
}
