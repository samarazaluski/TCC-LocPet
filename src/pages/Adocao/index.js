// import React from 'react'

// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   StatusBar,
//   SafeAreaView,
//   Platform
// } from 'react-native'

// import { useNavigation } from '@react-navigation/native'

// const statusBarHeight = StatusBar.currentHeight

// export default function Adoção() {
//   const navigation = useNavigation()
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.content}>
//           <Text>Conteúdo em desenvolvimento!</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f1f1f1',
//     paddingTop: Platform.OS === 'android' ? statusBarHeight : 25
//   },
//   content: {
//     alignSelf: 'center',
//     flex: 1,
//     width: '95%',
//     height: 280,
//     marginTop: 20,
//     marginBottom: 20,
//     backgroundColor: 'rgba(1, 31, 38, 0.54)',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 20
//   }
// })

import React from 'react'
import { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
// const statusBarHeight = StatusBar.currentHeight
import { StatusBar } from 'expo-status-bar'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ListItem from '../../components/ListItem'

import ButtonAvistados from '../../components/ButtonAvistados'

import results from './results'

const Adocao = () => {
  const navigation = useNavigation()
  const [searchText, setSearchText] = useState('')
  const [list, setList] = useState(results)

  useEffect(() => {
    if (searchText === '') {
      setList(results)
    } else {
      setList(
        results.filter(
          item => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      )
    }
  }, [searchText])

  const handleOrderClick = () => {
    let newList = [...results]
    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))

    setList(newList)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ButtonAvistados />
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um animal"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={t => setSearchText(t)}
        />
        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={32}
            color="#888"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // backgroundColor: 'rgba(1, 31, 38, 0.54)',
    // backgroundColor: '#B1D3F2',
  },
  input: {
    flex: 1,
    height: 45,
    // backgroundColor: '#363636',
    // backgroundColor: '#7B68EE',
    backgroundColor: '#f5f5f5',
    margin: 20,
    borderRadius: 30,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15
  },
  searchArea: {
    backgroundColor: '#7B68EE',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7
  },
  orderButton: {
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    width: 32,
    marginRight: 30
  },
  list: {
    flex: 1
  }
})

export default Adocao
