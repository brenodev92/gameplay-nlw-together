import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { GuildIcon } from '..'

import { Appointments } from '../../models/appointments.model'
import { categories } from '../../utils/categories'
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { styles as S } from './styles'
import { theme } from '../../theme'

type Props = RectButtonProps & {
  data: Appointments
}

export default function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild
  const { primary, on } = theme.colors

  return (
    <RectButton  {...rest}>
      <View style={S.container}>
        <GuildIcon />
        <View style={S.content}>
          <View style={S.header}>
            <Text style={S.title}>{data.guild.name}</Text>
            <Text style={S.category}>{category.title}</Text>
          </View>
          <View style={S.footer}>
            <View style={S.dateInfo}>
              <CalendarSvg />
              <Text style={S.date}>{data.date}</Text>
            </View>
            <View style={S.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text
                style={[S.player,
                { color: owner ? primary : on }
                ]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}