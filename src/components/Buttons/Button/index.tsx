import React from 'react';
import { Text } from 'react-native';
import Icon from '../../../assets/icons';
import { IconName } from '../../../assets/icons/types';
import { themeSC } from '../../../global/styles/theme';

import * as S from './styles';

interface IButtonProps {
  handleClick: () => void;
  title: string;
}

export default function Button(props: IButtonProps) {
  const { handleClick, title } = props
  return (
    <S.ButtonStyled onPress={handleClick} activeOpacity={0.7} >
      <S.Title>{ title }</S.Title>
    </S.ButtonStyled>
  );
}
