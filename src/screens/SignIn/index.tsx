import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Ilustartion from '../../assets/illustration.png'
import { ButtonIcon } from '../../components';

import { styles as S } from './styles'

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }
  return (
    <View style={S.container}>
      <Image
        style={S.image}
        source={Ilustartion}
        resizeMode="stretch"
      />
      <View style={S.content}>
        <Text style={S.title}>
          Conecte-se{'\n'}
          e organize suas{'\n'}
          jogatinas{'\n'}
        </Text>
        <Text style={S.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos.
        </Text>
        <ButtonIcon activeOpacity={0.7} title="Entrar com Discord" onPress={handleSignIn} />
      </View>
    </View>
  )
}