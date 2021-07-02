import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from '..'
import { Members } from '../../models/members.model'
import { theme } from '../../theme'

import { styles as S } from './styles'

type Props = {
  data: Members
}

export default function Member({ data }: Props) {
  const isOnline = data.status === 'online'
  return (
    <View style={S.container}>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Text style={S.title}>
          {data.username}
        </Text>
        <View style={S.status}>
          <View style={[S.bulletStatus,
          {
            backgroundColor: isOnline
              ? theme.colors.on
              : theme.colors.primary
          }]}
          />
          <Text style={S.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  )
}