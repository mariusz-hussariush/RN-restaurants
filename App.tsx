import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FetchUrl } from './Constants/constants';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  
  return (
    <View style={styles.container}>
      <ScrollView>
      <HomeScreen/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10
  },
});
