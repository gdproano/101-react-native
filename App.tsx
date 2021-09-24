import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import LifeCycle from './src/components/life-cycle'
import GlobalState from './src/context/globalState';

export default function App() {
  const [counter, setCounter] = useState(0);

  const onButtonPressed = () => {
    setCounter(counter +1);
  }

  return (
    <GlobalState>
    <View style={styles.container}>
      <LifeCycle onPress={onButtonPressed} counter={counter} />
    </View>
    </GlobalState>
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
