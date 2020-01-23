import React, { useEffect, useState, Fragment } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as Expo from "expo";

interface Styles {
  container: ViewStyle
}

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false)

  useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    }).then(()=> {console.log('fonts success'); setIsReady(true)}).catch(error => console.log(error))
  }, [])
  return (
    <Fragment>
      {isReady ?
       <View style={styles.container}>
        <HomeScreen />
      </View> :
      <Expo.AppLoading />}
    </Fragment>
  )
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    marginTop: 20
  },
});
