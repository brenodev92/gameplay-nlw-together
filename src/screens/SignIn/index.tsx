import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import Ilustartion from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles as S } from './styles'

export function SignIn() {
  return (
    <View style={S.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        style={S.image}
        source={Ilustartion}
        resizeMode="stretch"
      />
      <View style={S.content}>
        <Text style={S.title}>
          Organize{`\n`}
          suas jogatinas{`\n`}
          facilmente{`\n`}
        </Text>
        <Text style={S.subtitle}>
          Crie grupos para jogar seus game {`\n`}
          favoritos com seus amigos.
        </Text>
        <ButtonIcon activeOpacity={0.7} title="Entrar com Discord" />
      </View>
    </View>
  )
}