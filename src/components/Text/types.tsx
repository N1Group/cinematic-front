export interface TextProps {
  children: React.ReactNode;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: number;
}