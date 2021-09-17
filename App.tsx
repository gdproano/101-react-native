import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import LifeCycle from './src/components/life-cycle'

export default function App() {
  const [counter, setCounter] = useState(0);

  const onButtonPressed = () => {
    setCounter(counter +1);
  }

  return (
    <View style={styles.container}>
      <LifeCycle onPress={onButtonPressed} counter={counter} />
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
