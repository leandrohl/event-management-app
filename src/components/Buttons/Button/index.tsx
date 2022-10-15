import React from 'react';

import * as S from './styles';
import { IButtonProps } from './types';

export default function Button(props: IButtonProps) {
  const { handleClick, title, variant } = props
  return (
    <S.ButtonStyled 
      onPress={handleClick} 
      activeOpacity={0.7} 
      variant={variant || 'filled'} 
    >
      <S.Title variant={variant || 'filled'}>{ title }</S.Title>
    </S.ButtonStyled>
  );
}
