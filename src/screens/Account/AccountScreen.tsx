import {Header} from '@src/components';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const AccountScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Account" />
      <Text>MenuList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
