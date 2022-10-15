import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import Icon from '../../../assets/icons';
import { IconName } from '../../../assets/icons/types';

import * as S from './styles';

interface IIconButtonProps {
  handleClick: () => void;
  iconName: IconName;
}

export default function IconButton(props: IIconButtonProps) {
  const { handleClick, iconName } = props
  const theme = useTheme()

  return (
    <S.ButtonStyled onPress={handleClick} activeOpacity={0.7}    >
      <Icon name={iconName} fill={theme.colors.white}/>
    </S.ButtonStyled>
  );
}
