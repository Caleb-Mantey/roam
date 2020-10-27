import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import Textinput from '../../components/edittextinput/index';

export default class Editprofile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerimagecontainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Userprofile')}>
              <Image
                style={{width: 12, height: 12}}
                source={require('../../images/close-button.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titlecontainer}>
            <View>
              <Text style={styles.titletxt}>Edit profile</Text>
            </View>
          </View>
          <View style={styles.toprighttxt}>
            <TouchableOpacity>
              <Text style={styles.titletxt}>DONE</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Usercontainer}>
          <View style={styles.userimagecontainer}>
            <Image
              style={styles.userimage}
              source={require('../../images/roamprofile.png')}
            />
          </View>
          <View style={styles.usernamecontainer}>
            <Text style={styles.usernametxt}>Dunga Wade</Text>
          </View>
        </View>

        <Textinput iconname="user" placeholdertxt="Dunga" />
        <Textinput placeholdertxt="Wade" />
        <Textinput iconname="home" placeholder="Hometown" />
        <Textinput iconname="star" placeholder="Aboutme" />

        <View style={styles.footer}>
          <Text style={styles.footertxt}>
            Your profile can only be seen by riders{'\n'}
          </Text>
        </View>
      </View>
    );
  }
}
