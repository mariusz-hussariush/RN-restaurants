import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FetchUrl } from './Constants/constants';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
