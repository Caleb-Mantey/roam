import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Login from '../../screens/login/index';
import Loginnumber from '../../screens/loginnumber/index';
import Homescreen from '../../screens/homescreen/index';
import Userprofile from '../../screens/Userprofile/index';
import Editprofile from '../../screens/editprofile/index';
import Ride from '../../screens/Ride/index';
import InviteFriends from '../../screens/invitefriends/index';
import Settings from '../../screens/Settings/index';
import Help from '../../screens/Help/index';
import Addpayments from '../../screens/Addpayment/index';
import Rideconfirm from '../../screens/confirmride/index';
import Scheduleiride from '../../screens/Scheduleride/index';
import Promos from '../../screens/promos/index';
import PackageType from '../../screens/PackageType/index';
import Otp from '../../screens/Otp/index';
import Recievernumber from '../../screens/recievernumber/index';
import PickupTime from '../../screens/Pickuptime/index';
import OnBoarding from '../../screens/Onboarding/index';

import AsyncStorage from '@react-native-community/async-storage';


const AppNavigator = createStackNavigator();

function Navigation() {
  
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="OnBoarding" headerMode="none">
        <AppNavigator.Screen
          name="Login"
          component={Login}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Loginnumber"
          component={Loginnumber}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Homescreen"
          component={Homescreen}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Userprofile"
          component={Userprofile}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Editprofile"
          component={Editprofile}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Ride"
          component={Ride}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="InviteFriends"
          component={InviteFriends}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Settings"
          component={Settings}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Help"
          component={Help}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Addpayments"
          component={Addpayments}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Rideconfirm"
          component={Rideconfirm}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Scheduleiride"
          component={Scheduleiride}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Promos"
          component={Promos}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="PackageType"
          component={PackageType}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Otp"
          component={Otp}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Recievernumber"
          component={Recievernumber}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="PickupTime"
          component={PickupTime}
          Options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="OnBoarding"
          component={OnBoarding}
          Options={{headerShown: false}}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
