/* eslint-disable no-undef */

import { TextInputProps } from 'react-native';
import { IconName } from '../../assets/icons/types';

export interface InputProps extends TextInputProps {
  placeholder?: string;
  value: string;
  icon?: IconName;
  rightIcon?: IconName;
  rightClick?: () => void;
  handleChange: (text: string) => void;
  onRef?: (ref: any) => void;
  errorMessage?: string;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
}

export interface InputStyle {
  isActive?: boolean;
}
