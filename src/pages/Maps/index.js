import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

export default function Map() {
  const [location, setLocation] = useState(null)
  const [marker, setMarker] = useState([])
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      console.log(location)
    })()
  }, [])

  const newMarker = coordinate => {
    setMarker([...marker, coordinate])
  }

  return (
    <View style={styles.container}>
      <MapView
        onPress={e => newMarker(e.nativeEvent.coordinate)}
        style={styles.map}
        initialRegion={{
          latitude: -23.6,
          longitude: -46.76,
          latitudeDelta: 0.000922,
          longitudeDelta: 0.00421
        }}
        showsUserLocation
        loadingEnabled
        //mapaType="terrain"
      >
        {marker.length > 0 &&
          marker.map(m => {
            return <Marker coordinate={m} key={Math.random().toString()} />
          })}
      </MapView>

      <TouchableOpacity style={styles.buttom}>
        <Text style={styles.buttomText}>Localizar</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    paddingBottom: '20%',
    paddingLeft: '4%',
    paddingRight: '4%',
    backgroundColor: '#fff'
  },
  containerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '40%',
    paddingBottom: '5%'
  },
  map: {
    flex: 1,
    border: '10%',
    backgroundColor: '#000',
    border: 40
  },
  buttom: {
    backgroundColor: '#000',
    width: '100%',
    borderRadius: 30,
    paddingVertical: 10,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
