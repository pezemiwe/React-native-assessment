import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Navigation from './src/routes';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.gesture}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <StatusBar />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gesture: {
    flex: 1,
  },
});

export default App;
