import React from 'react'

import {
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform,
  View,
  FlatList
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import ButtonAvistados from '../../components/ButtonAvistados'
import Adocao from '../Adocao'
// import { FlatList } from 'react-native-web'

const statusBarHeight = StatusBar.currentHeight

export default function Avistados() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      {/* <ButtonAvistados/> */}
      <Adocao />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  }
})
