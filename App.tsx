import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

interface Styles {
  container: ViewStyle
}

export default function App() {
  
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    marginTop: 20
  },
});
