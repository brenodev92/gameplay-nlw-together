import React from 'react'
import {
  View,
  Text
} from 'react-native'
import Avatar from '../Avatar'

import { styles as S } from './styles'

export default function Profile() {
  return (
    <View style={S.container}>
      <Avatar urlImage="https://github.com/brenodev92.png" />
      <View>
        <View style={S.user}>
          <Text style={S.greeting}>Olá,</Text>
          <Text style={S.username}>Breno</Text>
        </View>
        <Text style={S.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  )
}