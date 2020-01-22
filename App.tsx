import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    marginTop: 20
  },
});
