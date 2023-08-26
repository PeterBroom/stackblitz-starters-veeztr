import { FC } from 'react';

interface ButtonTypes {
  text: string;
  onClick(): void;
}
export const Button: FC<ButtonTypes> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
