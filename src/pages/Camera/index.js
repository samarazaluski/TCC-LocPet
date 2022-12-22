import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [camera, setCamera] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermission(status === 'granted')
    })()
  }, [])
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri)
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        />
      </View >
      <TouchableOpacity
            style={styles.buttonFlip}
            onPress={ () => {

              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
                )
              }
            }
          >
            <FontAwesome
              name="exchange"
              size={23}
              color={'#7B68EE'}
            ></FontAwesome>
          </TouchableOpacity>
		  
      <TouchableOpacity
        style={styles.buttonCamera}
        title="tirar foto"
        onPress={() => takePicture()}>
        <FontAwesome
              name="camera"
              size={23}
              color={'#7B68EE'}
            ></FontAwesome>
            </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </View>
  )
}
const styles = StyleSheet.create({
  cameraContainer: {
    width: '100%',
    height: '60%',
    marginEnd: 30,
    marginBottom: '50%'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  tirarFoto: {
    backgroundColor: '#000',
    width: '100%',
    borderRadius: 30,
    paddingVertical: 10,
    marginEnd:150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonFlip: {
    position: 'absolute',
    bottom: 50,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50
  },
  buttonCamera: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50
  }
})
