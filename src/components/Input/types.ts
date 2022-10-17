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
  errorMessage?: string;
  error?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export interface InputStyle {
  isActive?: boolean;
  error?: boolean
}
