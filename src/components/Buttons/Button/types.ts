
export interface IButtonProps {
  handleClick: () => void;
  title: string;
  variant?: IVariant;
  loading?: boolean;
}

export type IVariant = 'filled' | 'outlined'