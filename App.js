import React, {Component, useEffect } from 'react';
import Navigation from './src/components/screensnavigation/index';
import SplashScreen from 'react-native-splash-screen'
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-community/async-storage';



export default class App extends Component {

  
  constructor(properties) {
    super(properties);
    //Remove this method to stop OneSignal Debugging 
    OneSignal.setLogLevel(6, 0);
    
    // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
    OneSignal.init("909fd5c2-5c44-47b3-918b-e2cbcc896fed", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
    
    // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
    // OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);


  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }
  

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
    
    const payload = openResult.notification.payload;
    const payload_action = openResult.notification.payload.additionalData;

    console.log("payload_action");
    console.log(payload_action);
    console.log(payload_action.rider_loc_log);

    if(payload_action.action == "acceptrequest"){

        // this.store_acceptrequest(payload_action);
        try {
          AsyncStorage.multiSet([
          ['@clientstatus', 'acceptedrequest'],
          ['@mapdetails_show', 'true'],
          ['@requestcode', payload_action.request_code],
          ['@ridercode', payload_action.rider_code],
          ['@rider_name', payload_action.rider_name],
          ['@rider_phone', payload_action.rider_phone],
          ['@rider_loc_log', payload_action.rider_loc_log],
          ['@rider_loc_lat', payload_action.rider_loc_lat],
          ['@pickup_loc_log', payload_action.pickup_loc_log],
          ['@pickup_loc_lat', payload_action.pickup_loc_lat],
          ['@dropoff_loc_log', payload_action.dropoff_loc_log],
          ['@dropoff_loc_lat', payload_action.dropoff_loc_lat],
          ['@rider_onesignalplayerid', payload_action.rider_onesignalplayerid]
          ]).then((value) => {
            console.log("Store_acceptrequest data stored successfully");
            RNRestart.Restart();
          })
          .then(res => {
              //do something else
          });       
        } catch (error) {
            console.log('AsyncStorage set data error in List component', error.message)
        }

    }else if(payload_action.action == "tripstart"){
      
        // this.store_tripstart(payload_action);
        console.log("Trip Start is called");
        console.log(payload_action);
        
        try {
          AsyncStorage.multiSet([
          ['@clientstatus', 'tripstart'],
          ['@requestcode', payload_action.request_code],
          ['@rider_onesignalplayerid', payload_action.rider_onesignalplayerid]
          ]).then((value) => {
            console.log("Values are Set");
            RNRestart.Restart();
          })
          .then(res => {
              //do something else
          });       
        } catch (error) {
            console.log('AsyncStorage set data error in List component', error.message)
        }
        

    }else if(payload_action.action == "tripatdropoff"){
      
        // this.store_tripatdropoff(payload_action);
        console.log("Trip At Dropoff is called");
        console.log(payload_action);
        
        try {
          AsyncStorage.multiSet([
          ['@clientstatus', 'tripatdropoff'],
          ['@requestcode', payload_action.request_code],
          ['@rider_onesignalplayerid', payload_action.rider_onesignalplayerid]
          ]).then((value) => {
            console.log("");
            RNRestart.Restart();
          })
          .then(res => {
              //do something else
          });       
        } catch (error) {
            console.log('AsyncStorage set data error in List component', error.message)
        }
        

    }else if(payload_action.action == "tripcompleted"){
      
        // this.store_tripcompleted(payload_action);
        console.log("Trip Completed is called");
        console.log(payload_action);
        
        try {
          AsyncStorage.multiSet([
          ['@clientstatus', 'tripcompleted'],
          ['@requestcode', payload_action.request_code],
          ['@rider_onesignalplayerid', payload_action.rider_onesignalplayerid]
          ]).then((value) => {
            console.log("");
            RNRestart.Restart();
          })
          .then(res => {
              //do something else
          });       
        } catch (error) {
            console.log('AsyncStorage set data error in List component', error.message)
        }
        

    }else if(payload_action.action == "tripcancel"){
      
        // this.store_tripcancel(payload_action);
        console.log(" Trip Cancelled is called");
        console.log(payload_action);
        
        try {
          AsyncStorage.multiSet([
            ['@clientstatus', ''],
            ['@requestcode', ''],
            ['@rider_onesignalplayerid', '']
          ]).then((value) => {
            console.log("");
            RNRestart.Restart();
          })
          .then(res => {
              //do something else
          });       
        } catch (error) {
            console.log('AsyncStorage set data error in List component', error.message)
        }

    }


  }

  
   


  async onIds(device) {
    console.log('Device info: ', device);
    await AsyncStorage.setItem('@playerid_rider', device.userId);
  }


  async store_acceptrequest(payload){
    
    console.log("Trip Accepted is Called");
    console.log(payload);
    
    try {
      AsyncStorage.multiSet([
      ['@clientstatus', 'acceptedrequest'],
      ['@requestcode', payload.request_code],
      ['@ridercode', payload.rider_code],
      ['@rider_name', payload.rider_name],
      ['@rider_phone', payload.rider_phone],
      ['@rider_onesignalplayerid', payload.rider_onesignalplayerid]
      ]).then((value) => {
        console.log("Store_acceptrequest data stored successfully");
        RNRestart.Restart();
      })
      .then(res => {
          //do something else
      });       
    } catch (error) {
        console.log('AsyncStorage set data error in List component', error.message)
    }
    
  }

  async store_tripstart(payload){
    
    console.log("Trip Start is called");
    console.log(payload);
    
    try {
      AsyncStorage.multiSet([
      ['@clientstatus', 'tripstart'],
      ['@requestcode', payload.request_code],
      ['@rider_onesignalplayerid', payload.rider_onesignalplayerid]
      ]).then((value) => {
        console.log("Values are Set");
      })
      .then(res => {
          //do something else
      });       
    } catch (error) {
        console.log('AsyncStorage set data error in List component', error.message)
    }
    // RNRestart.Restart();
  }

  async store_tripatdropoff(payload){
    
    console.log("Trip At Dropoff is called");
    console.log(payload);
    
    try {
      AsyncStorage.multiSet([
      ['@clientstatus', 'tripatdropoff'],
      ['@requestcode', payload.request_code],
      ['@rider_onesignalplayerid', payload.rider_onesignalplayerid]
      ]).then((value) => {
        console.log("");
      })
      .then(res => {
          //do something else
      });       
    } catch (error) {
        console.log('AsyncStorage set data error in List component', error.message)
    }
    // RNRestart.Restart();
  }

  async store_tripcompleted(payload){
    
    console.log("Trip Completed is called");
    console.log(payload);
    
    try {
      AsyncStorage.multiSet([
      ['@clientstatus', 'tripcompleted'],
      ['@requestcode', payload.request_code],
      ['@rider_onesignalplayerid', payload.rider_onesignalplayerid]
      ]).then((value) => {
        console.log("");
      })
      .then(res => {
          //do something else
      });       
    } catch (error) {
        console.log('AsyncStorage set data error in List component', error.message)
    }
    // RNRestart.Restart();
  }

  async store_tripcancel(payload){
    
    console.log(" Trip Cancelled is called");
    console.log(payload);
    
    try {
      AsyncStorage.multiSet([
        ['@clientstatus', 'tripcompleted'],
        ['@requestcode', payload.request_code],
        ['@rider_onesignalplayerid', payload.rider_onesignalplayerid]
      ]).then((value) => {
        console.log("");
      })
      .then(res => {
          //do something else
      });       
    } catch (error) {
        console.log('AsyncStorage set data error in List component', error.message)
    }
    // RNRestart.Restart();
  }





  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  
  render() {
    return <Navigation />;
  }

  
}


// function myiOSPromptCallback(permission){
//   // do something with permission value
// }
