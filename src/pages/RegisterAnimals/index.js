import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { CheckBox } from '@rneui/themed'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function RegisterAnimals() {
  const [checked, setChecked] = React.useState(true)
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Registro de pet</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput placeholder="Nome" style={styles.input} />

        <Text style={styles.title}>Raça</Text>
        <TextInput placeholder="Raça" style={styles.input} />

        <Text style={styles.title}>Cor</Text>
        <TextInput placeholder="Cor" style={styles.input} />

        <Text style={styles.title}>Olhos</Text>
        <TextInput placeholder="Olhos" style={styles.input} />

        <Text style={styles.title}>Tamanho</Text>
        <TextInput placeholder="Tamanho" style={styles.input} />

        <Text style={styles.title}>Pelo</Text>
        <TextInput placeholder="Pelo" style={styles.input} />

        <Text style={styles.title}>Orelhas</Text>
        <TextInput placeholder="Orelhas" style={styles.input} />

        <Text style={styles.title}>Cauda</Text>
        <TextInput placeholder="Cauda" style={styles.input} />

        <TouchableOpacity
          style={styles.buttom}
          onPress={() => navigation.navigate('Avistados')}
        >
          <Text style={styles.buttomText}>Publicar</Text>
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
  containerHeader: {
    marginTop: '10%',
    marginBottom: '5%',
    paddingStart: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    display: 'none',
    marginTop: 11
  },
  input: {
    padding: 10,
    paddingStart: 20,
    width: '100%',
    height: 50,
    marginTop: 12,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '900'
  },
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
    color: '#1e1e1e',
    fontWeight: 'bold',
    marginTop: 10,
    alignItems: 'center'
  }
})
