import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 50,
          height: 50,
          margin: 16,
        }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} />
      <Text style={styles.text}>Welcome to the 101 React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
  }
});
