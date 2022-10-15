import React, { useState } from 'react';
import { ActivityIndicator, View, TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';
import Icon from '../../assets/icons';

import * as S from './styles';
import { InputProps } from './types';

export default function Input(props: InputProps) {
  const {
    placeholder,
    icon,
    handleChange,
    disabled
  } = props;

  const [isActive, setIsActive] = useState(false);
  const theme = useTheme()

  function showIcon () {
    if (typeof icon === 'string') {
      return <Icon name={icon} fill={theme.colors.borderInput}/>;
    } else return icon;
  }

  return (
    <S.Container isActive={isActive}>
      {showIcon()}
      <S.ContainerInput>
        <S.TextInputStyled
          placeholder={placeholder}
          placeholderTextColor={theme.colors.placeHolderInput}
          onChangeText={handleChange}
          editable={!disabled}
          onFocus={(_) => setIsActive(true)}
          onBlur={(_) => setIsActive(false)}
          {...props}
        />
      </S.ContainerInput>
    </S.Container>
  );
};