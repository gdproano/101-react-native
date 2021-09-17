import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter1, setCounter1] = useState(0)

  //Se renderiza el componenete
  useEffect(()=>{
    console.log('Efecto sin dependencias');    
  })

  //Solo se ejecutara
  useEffect(()=>{
    console.log('Efecto solo');    
  },[])

  //Efecto cuando una propiedad se actualizo 
  useEffect(()=>{
    console.log('Efecto con dependencias');    
  },[counter1])

  return (
    <View style={styles.container}>
      <Text>CLick 1:{counter1}</Text>      
      <Button title="Incrementar" onPress={() => setCounter1(counter1 + 1)}></Button>      
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
