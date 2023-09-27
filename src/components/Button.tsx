import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  text: string;
  icon?: React.ReactNode;
}

export const ButtonComp: React.FC<CustomButtonProps> = ({
  onPress,
  text,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        {icon && icon}
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DB3C25',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
    height: 40,
    width: '95%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 7,
  },
});
