import {Header, Search} from '@src/components';
import {CardComp} from '@src/components/Card';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Asaro from '@src/assets/images/Asaro.svg';
import Donut from '@src/assets/images/Donut.svg';
import Efo from '@src/assets/images/Efo.svg';
import Chicken from '@src/assets/images/Chicken_stew.svg';
import Moimoi from '@src/assets/images/Moi_moi.svg';

export const MenuScreen: React.FC = () => {
  const screenWidth = Dimensions.get('window').width;
  const [favorite, setFavorite] = React.useState({});
  const toggleFavorite = (id: string) => {
    setFavorite((prevFavorite: any) => ({
      ...prevFavorite,
      [id]: !prevFavorite[id],
    }));
  };

  const content = [
    {
      id: '1',
      title: 'African Donut Mix (Puff Puff)',
      price: '£30',
      image: <Donut />,
    },
    {
      id: '2',
      title: 'Efo Riro',
      price: '£30',
      image: <Efo />,
    },
    {
      id: '3',
      title: 'Asaro (Yam Porridge)',
      price: '£30',
      image: <Asaro />,
    },
    {
      id: '4',
      title: 'Chicken Stew',
      price: '£30',
      image: <Chicken />,
    },
    {
      id: '5',
      title: 'Asaro (Yam Porridge)',
      price: '£30',
      image: <Asaro />,
    },
    {
      id: '6',
      title: 'Asaro (Yam Porridge)',
      price: '£30',
      image: <Asaro />,
    },
    {
      id: '7',
      title: 'Moi Moi',
      price: '£30',
      image: <Moimoi />,
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Menu" hideButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.list}>
          <Search placeholder="Search" onChangeText={() => {}} />
          <FlatList
            data={content}
            renderItem={({item: {title, price, image, id}}) => (
              <TouchableOpacity>
                <CardComp
                  title={title}
                  price={price}
                  image={image}
                  screenWidth={screenWidth}
                  onPress={toggleFavorite}
                  favorite={favorite}
                  id={id}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={styles.content}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 120,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
