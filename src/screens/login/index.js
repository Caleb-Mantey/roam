import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import styles from './style';

export default class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../images/login.png')}
        style={{width: '100%', height: '100%'}}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />
        <View style={styles.container}>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Loginnumber')}>
              <Text style={styles.btntxt}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttoncontainer1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Loginnumber')}>
              <Text style={[styles.btntxt, {color: 'white'}]}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={{marginRight: 6}}>
              <Text style={styles.footertxt}>Ready to earn?</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text
                  style={[styles.footertxt, {textDecorationLine: 'underline'}]}>
                  Open the driver app
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
