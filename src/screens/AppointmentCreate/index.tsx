import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  FlatList
} from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import {
  BasePage,
  ButtonIcon,
  Divider,
  Header,
  ListHeader,
  Member
} from '../../components'
import { theme } from '../../theme'
import BannerImg from '../../assets/banner.png'

import { styles as S } from './styles'

const members = [
  {
    id: '1',
    username: 'Breno Lopes',
    avatar_url: "https://github.com/brenodev92.png",
    status: 'online'
  },
  {
    id: '2',
    username: 'Breno Lopes',
    avatar_url: "https://github.com/brenodev92.png",
    status: 'offline'
  }

]


export function AppointmentCreate() {
  return (
    <BasePage>
      <Header
        title="criar"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              color={theme.colors.primary}
              size={24}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={BannerImg}
        style={S.banner}
      >
        <View style={S.bannerContent}>
          <Text style={S.title}>
            Lendários
          </Text>
          <Text style={S.subtitle}>
            É hoje que vamos chegar a challenger sem perder uma partida MD10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <Divider />}
        style={S.members}
      />
      <View style={S.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </BasePage>
  )
}