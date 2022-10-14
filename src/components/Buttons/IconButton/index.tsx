import React from 'react';
import { Text } from 'react-native';
import Icon from '../../../assets/icons';
import { IconName } from '../../../assets/icons/types';
import { themeSC } from '../../../global/styles/theme';

import * as S from './styles';

interface IIconButtonProps {
  handleClick: () => void;
  iconName: IconName;
}

export default function IconButton(props: IIconButtonProps) {
  const { handleClick, iconName } = props
  return (
    <S.ButtonStyled onPress={handleClick} activeOpacity={0.7}    >
      <Icon name={iconName} fill={themeSC.colors.white}/>
    </S.ButtonStyled>
  );
}
