import React, {Component} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Button, Text} from 'native-base';

import styles from './style';
import IntlPhoneInput from 'react-native-intl-phone-input';

export default class Recievernumber extends Component {
  onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}) => {
    console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.arrowcontainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.leftarrow}
              source={require('../../images/left-arrow.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.txtconatiner}>
          <Text style={styles.txt}>Who is recieving this package?</Text>
        </View>

        <View style={styles.inputcontainer}>
          <View style={styles.firsttextinput}>
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#A0A0A0"
              style={{fontSize: 15, borderBottomWidth: 0.5}}
            />
          </View>
          <View style={styles.firsttextinput}>
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#A0A0A0"
              style={{fontSize: 15, borderBottomWidth: 0.5}}
            />
          </View>
        </View>

        <View style={styles.txtconatiner}>
          <Text style={styles.txt}>Enter recievers number?</Text>
        </View>

        <View style={styles.numbercontainer}>
          <View style={styles.countrycode}>
            <IntlPhoneInput
              onChangeText={this.onChangeText}
              defaultCountry="GH"
              phoneInputStyle={{fontSize: 20, width: '100%'}}
              containerStyle={{borderBottomWidth: 0.5}}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <Button
            dark
            style={{borderRadius: 8, width: 110, justifyContent: 'center'}}
            onPress={() => {
              this.props.navigation.navigate('PickupTime');
            }}>
            <Text style={{fontSize: 18}}> Next </Text>
          </Button>
        </View>
        {/* <View style={styles.footercontainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Homescreen')}>
            <Text style={styles.footertxt}>
              Have an account and a new number?
            </Text>
          </TouchableOpacity>
        </View> */}
      </KeyboardAvoidingView>
    );
  }
}
