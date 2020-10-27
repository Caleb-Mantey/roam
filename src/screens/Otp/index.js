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
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default class Otp extends Component {
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
          <Text style={styles.txt}>Enter the code sent to your phone?</Text>
          <View style={{alignSelf: 'center', flexDirection: 'column'}}>
            <TouchableOpacity>
              <Text style={{color: '#00245a'}}>Rescend</Text>
            </TouchableOpacity>
          </View>
          <OTPInputView
            style={{width: '80%', height: 200}}
            pinCount={4}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
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
                this.props.navigation.navigate('Recievernumber');
              }}>
              <Text style={{fontSize: 18}}> Next </Text>
            </Button>
          </View>
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
