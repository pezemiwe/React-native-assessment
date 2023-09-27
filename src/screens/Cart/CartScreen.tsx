import {Header} from '@src/components';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Asaro from '@src/assets/images/Asaro.svg';
import Trash from '@src/assets/svgs/trash.svg';
import Minus from '@src/assets/svgs/minus.svg';
import Plus from '@src/assets/svgs/plus.svg';

export const CartScreen: React.FC = () => {
  const [counter, setCounter] = React.useState(1);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Cart" />
      <View style={styles.list}>
        <View style={styles.item}>
          <View style={styles.box}>
            <Asaro />
            <View style={styles.text}>
              <Text style={styles.title}>Asaro (Yam Porridge)</Text>
              <Text style={styles.price}>£30</Text>
              <TouchableOpacity>
                <Trash />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.counter}>
            <TouchableOpacity onPress={decrement}>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.title}>{counter}</Text>
            <TouchableOpacity {...{onPress: increment}}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.total}>
        <View style={styles.fair}>
          <Text style={styles.title}>Total</Text>
          <Text style={styles.light}>(3 items)</Text>
        </View>
        <Text style={styles.title}>£30</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  list: {
    margin: 24,
    flex: 1,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    padding: 8,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 16,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#151515',
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#DB3C25',
  },
  counter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    marginBottom: 100,
    marginHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  light: {
    fontSize: 14,
    fontWeight: '500',
    color: '#151515',
    opacity: 0.5,
  },
  fair: {
    display: 'flex',
    flexDirection: 'row',
  },
});
