
export interface Photo {
  id: string;
  url: string;
  caption: string;
  category: 'Simple' | 'Beautiful' | 'Cute' | 'Memories';
}

export interface MessageProps {
  onAccept: () => void;
}
