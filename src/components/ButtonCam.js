import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

export default function ButtomCam({ focused, size, color }) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: focused ? '#011F26' : 'rgba(1, 31, 38, 0.54)',
          borderRadius: 40
        }
      ]}
    >
      <MaterialIcons
        name="camera"
        color={focused ? '#f8f8f8' : '#ddd'}
        size={size}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 40,
    // backgroundColor: "#011F26",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  }
})
