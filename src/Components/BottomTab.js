import Ant from 'react-native-vector-icons/AntDesign';
import CartScreen from './BottomTabs/CartScreen';
import EditProfileScreen from './BottomTabs/EditProfileScreen';
import HomeScreen from './BottomTabs/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './BottomTabs/ProfileScreen';
import PropertyScreen from './BottomTabs/PropertyScreen';
import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import CheckOut from './BottomTabs/CheckOut';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="PropertyScreen"
      component={PropertyScreen}
      options={{
        tabBarLabel: 'Property',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="notifications" color={color} size={26} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartStackScreen}
      options={{
        tabBarLabel: 'Cart',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => (
          <Ant name="shoppingcart" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

const CartStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0, // Android
        },
        headerTintColor: '#000',
      }}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
    </Stack.Navigator>
  );
};

const ProfileStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0, // Android
        },
        headerTintColor: '#000',
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor="#fff"
                color="#000"
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default MainTabScreen;
