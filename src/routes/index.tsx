import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '@src/utils';
import {MenuScreen, AccountScreen, CartScreen, HomeScreen} from '@src/screens';
import HomeIcon from '@src/assets/svgs/home.svg';
import HomeIconFilled from '@src/assets/svgs/home_solid.svg';
import MenuIcon from '@src/assets/svgs/menu.svg';
import MenuIconFilled from '@src/assets/svgs/menu_solid.svg';
import CartIcon from '@src/assets/svgs/cart.svg';
import CartIconFilled from '@src/assets/svgs/cart_solid.svg';
import AccountIcon from '@src/assets/svgs/profile.svg';
import AccountIconFilled from '@src/assets/svgs/profile_solid.svg';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Icons = {
  Home: <HomeIcon />,
  HomeFill: <HomeIconFilled />,
  Menu: <MenuIcon />,
  MenuFill: <MenuIconFilled />,
  Cart: <CartIcon />,
  CartFill: <CartIconFilled />,
  Account: <AccountIcon />,
  AccountFill: <AccountIconFilled />,
};

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.Base}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.Base} component={TabNavigation} />
    </Stack.Navigator>
  );
}

export const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 83,
        paddingBottom: 16,
        paddingTop: 19,
        position: 'absolute',
      },
      tabBarActiveTintColor: '#D53B30',
      tabBarInactiveTintColor: '#858585',
      tabBarLabelStyle: {
        fontSize: 14,
      },
    }}>
    <Tab.Screen
      name={ROUTES.Home}
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (focused ? Icons.HomeFill : Icons.Home),
      }}
    />
    <Tab.Screen
      name={ROUTES.Menu}
      component={MenuScreen}
      options={{
        tabBarIcon: ({focused}) => (focused ? Icons.MenuFill : Icons.Menu),
      }}
    />
    <Tab.Screen
      name={ROUTES.Cart}
      component={CartScreen}
      options={{
        tabBarIcon: ({focused}) => (focused ? Icons.CartFill : Icons.Cart),
      }}
    />
    <Tab.Screen
      name={ROUTES.Account}
      component={AccountScreen}
      options={{
        tabBarIcon: ({focused}) =>
          focused ? Icons.AccountFill : Icons.Account,
      }}
    />
  </Tab.Navigator>
);
