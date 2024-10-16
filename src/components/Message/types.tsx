export interface MessageProps {
  isMessageAuthor?: boolean;
  isSystemMessage?: boolean;
  text?: string;
  color?: '#FFA049' | '#FF4949';
  name?: string;
  bgColor?: string;
  avatar?: string;
}