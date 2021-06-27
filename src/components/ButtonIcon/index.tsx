import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

import DiscordImg from '../../assets/discord.png'
import { styles as S } from './styles'

type Props = RectButtonProps & {
  title: string
}

export default function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton style={S.container} {...rest}>
      <View style={S.iconWrapper}>
        <Image source={DiscordImg} style={S.icon} />
      </View>
      <Text style={S.title}>{title}</Text>
    </RectButton>
  )
}