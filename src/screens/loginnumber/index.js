import React, {Component} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {Button, Text} from 'native-base';

import styles from './style';
import IntlPhoneInput from 'react-native-intl-phone-input';

import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import { FloatingAction } from "react-native-floating-action";



export default class Loginnumber extends Component {
  onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}) => {
    console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
  };

  render() {

    const actions = [
      {
        text: "Call RIder",
        icon: require("../../images/call.png"),
        name: "bt_accessibility",
        position: 2,
        color: '#000'
      },
      {
        text: "Cancel Request",
        icon: require("../../images/close.png"),
        name: "bt_language",
        position: 1,
        color: '#000'
      },
    ];


    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.arrowcontainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            {/* <Image
              style={{width: 25, height: 25}}
              source={require('../../images/close-button.png')}
            /> */}
            <Icon style={{color: '#000000'}} size={17} name='arrow-left' />
            <Text style={styles.backtxt}>Back</Text>
          </TouchableOpacity>
        </View>

        <View style={{width: '100%',height: 270}}>
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 23.0321,
              longitude: 72.5252,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>


        
        <ScrollView>
          <View style={styles.txtconatiner}>
            <Text style={styles.pagetitle}>Request's Details</Text>
          </View>

          <View style={styles.detcontainer}>
            <View style={styles.firsttextinput}>
              <Text style={styles.txt}>Rove Code: PQC0012 </Text>
            </View>
            <View style={styles.firsttextinput}>
              <Text style={styles.txt}>Status: Waiting Rider </Text>
            </View>
          </View>
          
          {/* <View style={styles.txtconatiner}>
            <Text style={styles.subheading}><Icon size={17} name='calendar' /> Locations & Time</Text>
          </View> */}

          <View style={styles.inputcontainer}>
            <View style={styles.firsttextinput}>
              <Text style={styles.txt_head}>Pick-up: </Text>
              <Text style={styles.txt}>North Kaneshie, Accra </Text>
            </View>
            <View style={styles.firsttextinput}>
              <Text style={styles.txt_head}>Drop-off: </Text>
              <Text style={styles.txt}>Circle , Accra </Text>
            </View>
          </View>

          <View style={styles.inputcontainer}>
            <View style={styles.firsttextinput}>
              <Text style={styles.txt_head}>Date: </Text>
              <Text style={styles.txt}>31/08/2020 </Text>
            </View>
            <View style={styles.firsttextinput}>
              <Text style={styles.txt_head}>Time: </Text>
              <Text style={styles.txt}>13:00</Text>
            </View>
          </View>

          <View style={styles.txtconatiner}>
            <Text style={styles.subheading}><Icon size={17} name='id-card' /> Rider's Details</Text>
          </View>

          <View style={styles.inputcontainer}>
            <View style={styles.firsttextinput}>
              <Text style={styles.txt_head}>Name: </Text>
              <Text style={styles.txt}>Kofi Bahn </Text>
            </View>
            <View style={styles.firsttextinput}>
            <Text style={styles.txt_head}>Phone: </Text>
              <Text style={styles.txt}>+233 56 678 7273 </Text>
            </View>
          </View>
          <View style={styles.inputcontainer}>
            <View style={styles.firsttextinput}>
              <Text style={styles.txt_head}>Bike's Description: </Text>
              <Text style={styles.txt}>Black & Red, Yamaha </Text>
            </View>
            <View style={styles.firsttextinput}>
            <Text style={styles.txt_head}>Bike's N0. Plate: </Text>
              <Text style={styles.txt}>GT 456 20 </Text>
            </View>
          </View>

          <View style={styles.txtconatiner}>
            <Text style={styles.subheading}><Icon size={17} name='archive' /> Package's Info</Text>
          </View>

          <View style={styles.inputcontainer}>
            <View style={styles.firsttextinput}>
              <Text style={styles.txt_head}>Type: </Text>
              <Text style={styles.txt}>Documents </Text>
            </View>
            <View style={styles.firsttextinput}>
            <Text style={styles.txt_head}>Quantity: </Text>
              <Text style={styles.txt}>5 </Text>
            </View>
          </View>

        </ScrollView>
        

        <FloatingAction
          actions={actions}
          color='#000'
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
        />

      </KeyboardAvoidingView>
    );
  }
}
