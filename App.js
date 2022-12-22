import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import { Alert, BackHandler} from 'react-native'
async function  sessao()
{
  let resData = await AsyncStorage.getItem('userData');
      console.log(JSON.parse(resData));
}
sessao();

export default function App() {

  
//Componente BackHendler( Perguntar se deseja sair do App)
useEffect(() => {
  const backAction = () => {
    Alert.alert("Ops!", "Deseja Realmente sair de LocPet?", [
      {
        text: "NÃO",
        onPress: () => null,
        style: "cancel"
      },
      { text: "SIM", onPress: () => BackHandler.exitApp()}
    ])
    return true;
  };
  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
}, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#7B68EE" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  )
}
