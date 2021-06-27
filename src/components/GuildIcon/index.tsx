import React from 'react'
import { Image } from 'react-native'

import { styles as S } from './styles'

export default function GuildIcon() {
const uri = 'https://img2.gratispng.com/20180409/skq/kisspng-discord-computer-icons-logo-computer-software-avatar-5acbe3fc215959.1485806315233116121366.jpg'

  return (
    <Image
      source={{ uri}}
      style={S.image}
      resizeMode='cover'
    />
  )
}
