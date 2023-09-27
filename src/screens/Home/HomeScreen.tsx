import {Header} from '@src/components';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <Text style={styles.text}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});
