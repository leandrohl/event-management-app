import React, { useState } from 'react';
import { ActivityIndicator, View, TextInput } from 'react-native';
import Icon from '../../assets/icons';
import { themeSC } from '../../config/styles/theme';

import * as S from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = (props) => {
  const {
    placeholder,
    value,
    icon,
    handleChange,
    disabled
  } = props;

  const [isActive, setIsActive] = useState(false);


  function showIcon () {
    if (typeof icon === 'string') {
      return <Icon name={icon} fill={themeSC.colors.borderInput}/>;
    } else return icon;
  }

  return (
    <S.Container isActive={isActive}>
      {showIcon()}
      <S.ContainerInput>
        <S.TextInputStyled 
          value={value}
          placeholder={placeholder}
          placeholderTextColor={themeSC.colors.placeHolderInput}
          onChangeText={handleChange}
          editable={!disabled}
          onFocus={(_) => setIsActive(true)}
          onBlur={(_) => setIsActive(false)}
        />
      </S.ContainerInput>
    </S.Container>
  );
};

export default Input;
