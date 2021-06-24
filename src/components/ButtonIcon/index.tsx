import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { styles as S } from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={S.container} {...rest}>
      <View style={S.iconWrapper}>
        <Image source={DiscordImg} style={S.icon} />
      </View>
      <Text style={S.title}>{title}</Text>
    </TouchableOpacity>
  )
}