import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient'

import { styles as S } from './styles'
import { theme } from '../../theme';

type Props = {
  children: ReactNode
}

export function BasePage({ children }: Props) {
  return (
    <LinearGradient
      style={S.container}
      colors={
        [
          theme.colors.secondary80,
          theme.colors.secondary100
        ]
      }>
      {children}
    </LinearGradient>
  )
}