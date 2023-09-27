import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeartSolid from '@src/assets/svgs/heart_solid.svg';
import HeartOutline from '@src/assets/svgs/heart_outline.svg';
import {ButtonComp} from './Button';
import Cart from '@src/assets/svgs/cart_outline.svg';

interface CardProps {
  id: string;
  favorite?: any;
  title: string;
  price: string;
  image: React.ReactNode;
  screenWidth: any;
  onPress?: (id: string) => void;
}

export const CardComp: React.FC<CardProps> = ({
  favorite,
  title,
  price,
  image,
  screenWidth,
  onPress,
  id,
}) => {
  const numColumns = 2;
  const cardWidth = (screenWidth - 64) / numColumns;

  return (
    <TouchableOpacity>
      <View
        style={{
          width: cardWidth,
          ...styles.container,
        }}>
        <TouchableOpacity onPress={() => onPress?.(id)}>
          <View style={styles.favorite}>
            {favorite[id] ? <HeartSolid /> : <HeartOutline />}
          </View>
        </TouchableOpacity>
        <View style={styles.image}>{image}</View>
        <View style={styles.content}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <ButtonComp text="Add to Cart" onPress={() => {}} icon={<Cart />} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    paddingVertical: 11,
    paddingHorizontal: 8,
  },
  favorite: {
    position: 'absolute',
    top: 15,
    right: 14,
  },
  image: {
    width: '100%',
    marginTop: 39,
    marginBottom: 8,
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#151515',
    width: '73%',
  },
  price: {
    fontSize: 14,
    color: '#DB3C25',
  },
});
