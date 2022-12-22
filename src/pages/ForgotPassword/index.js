import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function ForgotPassword() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/favicon.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Altere sua senha</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        {/* <Text style={styles.msg_login(display)}>
          Erro! Usuário ou Senha Inválidos!!!{' '}
        </Text> */}
        <Text>{/* {email} - {senha} */}</Text>
        <Text style={styles.title}></Text>
        <TextInput
          placeholder="Digite seu E-mail"
          // onChangeText={text => setEmail(text)}
          style={styles.input}
        />

        <Text style={styles.title}></Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua nova senha"
          // secureTextEntry={true}
          // onChangeText={text => setSenha(text)}
        />
        <Text style={styles.title}></Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha novamente"
          // secureTextEntry={true}
          // onChangeText={text => setSenha(text)}
        />

        <TouchableOpacity
          style={styles.buttom}
          // onPress={() => acessar()}
          onPress={() => navigation.navigate('SignIn')}
          //onPress={() => setDisplay('flex')}
        >
          <Text style={styles.buttomText}>Pronto</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.RegisterText}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.RegisterText}>Esqueceu sua senha?</Text>
        </TouchableOpacity> */}
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
    backgroundColor: '#7B68EE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0%',
    marginTop: '30%'
  },
  containerHeader: {
    marginTop: '10%',
    marginBottom: '0%',
    paddingStart: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#7B68EE',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    display: 'none',
    fontSize: 20,
    marginTop: 11
  },
  input: {
    padding: 10,
    paddingStart: 20,
    width: '100%',
    height: 50,
    marginTop: 12,
    borderRadius: 30,
    backgroundColor: '#fff',
    color: '#000',
    justifyContent: 'center'
  },
  // TextInput: {
  //   padding: 10,
  //   paddingStart: 20,
  //   width: '80%',
  //   height: 50,
  //   marginTop: 20,
  //   borderRadius: 30,
  //   backgroundColor: '#fff'
  // },
  buttom: {
    backgroundColor: '#000',
    width: '100%',
    borderRadius: 30,
    paddingVertical: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttomRegister: {
    marginTop: 50,
    alignSelf: 'center'
  },
  RegisterText: {
    color: '#a1a1a1',
    fontWeight: 'bold',
    marginTop: 10,
    alignItems: 'center'
  },
  msg_login: (text = 'none') => ({
    fontWeight: 'bold',
    fontSize: 15,
    color: 'red',
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    display: text
  })
})
