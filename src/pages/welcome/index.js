import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo2.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>Locpet</Text>
        <Text style={styles.text}>A ajuda está a caminho! Faça o login ou cadastre-se para começar</Text>

        <TouchableOpacity
          style={styles.buttom}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttomText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B68EE'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#7B68EE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 28,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttom: {
    position: 'absolute',
    backgroundColor: '#000',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttomText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})
