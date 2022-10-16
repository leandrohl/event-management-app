import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';
import { IButtonProps } from './types';

export default function Button(props: IButtonProps) {
  const { handleClick, title, variant, loading } = props

  const theme = useTheme()

  return (
    <S.ButtonStyled 
      onPress={handleClick} 
      activeOpacity={0.7} 
      variant={variant || 'filled'}
    >
      {
        loading
        ? <ActivityIndicator color={theme.colors.white} />
        : <S.Title variant={variant || 'filled'}>{ title }</S.Title>
      }
    </S.ButtonStyled>
  );
}
