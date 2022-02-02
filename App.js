import { StyleSheet, View } from 'react-native';

import Home from "./src/Views/Home"

export default function App() {
  return (
    <View style={styles.container} testID="app">
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
