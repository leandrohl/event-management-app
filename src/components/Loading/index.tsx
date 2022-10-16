import React from 'react';
import { ActivityIndicator, Text } from 'react-native';

import { useTheme } from 'styled-components';

import * as S from './styles';

const Loading: React.FC = () => {
  const theme = useTheme();
  return (
    <S.Container> 
      <ActivityIndicator color={theme.colors.primary} style={{ marginTop: 24 }} size={32} />
    </S.Container>
  );
};

export default Loading;