import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@src/utils/constant';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {
  rightAction?: () => React.ReactNode;
  title?: string;
  hideButton?: boolean;
  onPressBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  rightAction,
  title,
  hideButton,
  onPressBack,
}) => {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  const goBack = () => {
    if (onPressBack) {
      return onPressBack();
    }
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate(ROUTES.Menu);
    }
  };

  return (
    <View style={{paddingTop: insets.top}}>
      <View style={styles.heading}>
        <TouchableOpacity onPress={goBack}>
          {!hideButton && (
            <Image
              source={require('@src/assets/images/Back.png')}
              style={styles.arrow}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.text}>{title || ''}</Text>
        <View>{!hideButton && rightAction?.()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingBottom: 24,
    borderBottomColor: '#E1E5E9',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 14,
    color: '#151515',
  },
  arrow: {
    marginLeft: 24,
  },
});
