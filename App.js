import * as React from 'react';

import BottomTab from './src/Components/BottomTab';
import CreateProfileScreen from './src/Components/CreateProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { OtpAuth } from './src/Components/OtpAuthScreen';
import {OtpScreen} from './src/Components/OTPScreen';
import SplashScreen from "./src/Components/SplashScreen";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="first">
      <Stack.Screen name="first" component={SplashScreen}  options={{headerShown: false}}
        />
        <Stack.Screen name="OtpAuth" component={OtpAuth}  options={{title:'OTP Verification', headerBackTitle:''}}
        />
        <Stack.Screen
         name="Otp" component={OtpScreen}
         options={{title:'Input OTP', headerBackTitle:''}} />
         <Stack.Screen name="create" component={CreateProfileScreen}
         options={{title:'Enter your details', headerBackTitle:''}} />
        <Stack.Screen name="bottom" component={BottomTab}
         options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;