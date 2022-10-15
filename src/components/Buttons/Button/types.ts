
export interface IButtonProps {
  handleClick: () => void;
  title: string;
  variant?: IVariant
}

export type IVariant = 'filled' | 'outlined'