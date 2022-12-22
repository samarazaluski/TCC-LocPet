import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons'
import ButtonAvistados from '../components/ButtonAvistados'



const ListItem = ({ data }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: data.image }} style={styles.itemPhoto} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.name}</Text>

        <Text style={styles.itemP2}>
          <FontAwesome5 name="paw" size={20} color="black" /> {data.raca}
        </Text>
        <Text style={styles.itemP2}>
          <Ionicons name="color-palette" size={20} color="black" /> {data.cor}
        </Text>
        <Text style={styles.itemP2}>
          <FontAwesome5 name="eye" size={20} color="black" /> {data.olhos}
        </Text>
        <Text style={styles.itemP2}>
          <Ionicons name="resize" size={20} color="black" /> {data.tamanho}
        </Text>
        <Text style={styles.itemP2}>
          <Entypo name="scissors" size={20} color="black" /> {data.pelo}
        </Text>
        <Text style={styles.itemP2}>
          <Ionicons name="md-ear" size={20} color="black" /> {data.orelha}
        </Text>
        <Text style={styles.itemP2}>
          <FontAwesome5 name="dog" size={20} color="black" /> {data.cauda}
        </Text>

        <TouchableOpacity
          styles={styles.buttom}
          onPress={() => navigation.navigate('Maps')}
          >
          <Text style={styles.buttomText}>
            <Ionicons name="map" size={20} Backgroundcolor="#7B68EE" />{' '}
            {data.mapa}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingTop: 15,
    paddingBottom: 15
  },
  itemPhoto: {
    width: 115,
    height: 155,
    borderRadius: 10
  },
  itemInfo: {
    marginLeft: 20
  },
  itemP1: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 5
  },
  itemP2: {
    fontWeight: '400',
    fontSize: 15
  },
  buttomText: {
    marginTop: 15,
    color: '#7B68EE',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default ListItem
