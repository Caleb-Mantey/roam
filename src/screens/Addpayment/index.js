import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Text} from 'native-base';
export default class Addpayments extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerimagecontainer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{width: 15, height: 15}}
                source={require('../../images/left-arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titlecontainer}>
            <View>
              <Text style={styles.titletxt}>Add payment</Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.textinputcontainer,
            {borderBottomColor: '#A0A0A0', borderBottomWidth: 0.5},
          ]}>
          <View style={styles.iconcontainer}>
            <Icon size={20} name="credit-card" />
          </View>
          <View style={styles.firsttextinput}>
            <TextInput
              placeholder="Credit card number"
              placeholderTextColor="#A0A0A0"
              style={{fontSize: 15}}
            />
          </View>
          <View style={[styles.iconcontainer, {alignItems: 'flex-end'}]}>
            <TouchableOpacity>
              <Icon size={17} name="camera" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textinputcontainer}>
          <View style={styles.textinput1}>
            <TextInput
              placeholder="MM/YY"
              placeholderTextColor="#A0A0A0"
              style={{fontSize: 15}}></TextInput>
          </View>
          <View style={styles.textinput2}>
            <TextInput
              placeholder="CVV"
              placeholderTextColor="#A0A0A0"
              style={{fontSize: 15}}></TextInput>
          </View>
        </View>

        <View style={styles.paycontainer}>
          <Text style={styles.paytxt}>Or pay with</Text>
        </View>

        <View style={styles.buttoncontainer}>
          <View style={[styles.button]}>
            <TouchableOpacity>
              <Image
                source={require('../../images/mtn.png')}
                style={{width: 80, height: 80}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Image
                source={require('../../images/paypal.png')}
                style={{width: 80, height: 20}}
              />
            </TouchableOpacity>
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
              this.props.navigation.navigate('Ride');
            }}>
            <Text style={{fontSize: 18}}> Next </Text>
          </Button>
        </View>

        <View style={styles.footercontainer}>
          <View style={styles.footerview}>
            <Icon size={10} name="lock" style={{marginTop: 4}} />
            <Text style={styles.footertxt}>
              {' '}
              Your payment info will be stored securely
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
