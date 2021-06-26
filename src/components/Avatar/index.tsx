import React from 'react'
import {
  Image
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../theme'

import { styles as S } from './styles'

type Props = {
  urlImage: string
}

export default function Avatar({ urlImage }: Props) {
  return (
    <LinearGradient
      style={S.container}
      colors={
        [
          theme.colors.secondary50,
          theme.colors.secondary70
        ]
      }>
      <Image style={S.avatar} source={{ uri: urlImage }} />
    </LinearGradient>
  )
}