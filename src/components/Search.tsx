import * as React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';

interface SearchProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

export const Search: React.FC<SearchProps> = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@src/assets/images/search.png')}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#858585"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 16,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 50,
    zIndex: 1,
  },
  input: {
    width: '100%',
    paddingHorizontal: 74,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#E1E5E9',
    borderWidth: 1,
    color: '#000000',
  },
});
