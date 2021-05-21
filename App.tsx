import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={{
          width: 50,
          height: 50,
          margin: 16,
          marginTop: 128,
        }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', marginHorizontal: 24 }}>
        <Text style={styles.text}>Element 1</Text>
        <Text style={styles.text}>Element 2</Text>
        <Text style={styles.text}>Element 3</Text>
        <Text style={styles.text}>Element 4</Text>
        <Text style={styles.text}>Element 5</Text>
      </View>
      <TouchableOpacity
        onPress={() => { }}
        style={{ alignSelf: 'flex-end', bottom: 0, width: '100%', alignItems: 'center', marginVertical: 48, backgroundColor: 'green', padding: 24 }}
        accessibilityLabel="Learn more about this purple button"
      >
        <Text style={{color: 'white'}}>Action</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fafafa',
    marginHorizontal: 24
  },
  text: {
    color: 'blue',
  }
});
