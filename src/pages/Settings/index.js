  import React, { useState, useEffect } from 'react'

  import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Platform
  } from 'react-native'

  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { useNavigation } from '@react-navigation/native'

  const statusBarHeight = StatusBar.currentHeight
//função para pegar do AsyncStorage, o email logado
  export default function Settings() {
    const [user, setUser] = useState(null);
    useEffect( () => {
      async function getUser (){
        let response=await AsyncStorage.getItem('userData');
        let json=JSON.parse(response);
        setUser(json.email);
      }
      getUser();
    }, []);

    // método necessário para utilizar a bilioteca de navegação 
    const navigation = useNavigation();

    //retorno com o render do conteúdo da página
    return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.userData}>Login atual: {user}</Text>

        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.contentText}>Conteúdo em desenvolvimento!</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      paddingTop: Platform.OS === 'android' ? statusBarHeight : 25
    },
    content: {
      alignSelf: 'center',
      flex: 1,
      width: '95%',
      height: 280,
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: 'rgba(1, 31, 38, 0.54)',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20
    },
    contentText: {
      fontSize: 24,
      color: '#fff'
    },
    userData: {
      fontSize: 15,
      marginStart: 65,
      color: '#1e1e1e'
    }
  })
