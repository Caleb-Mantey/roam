import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Drawermenu from '../../components/Drawermenu/index';

class Drawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.userpiccontainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Userprofile')}>
              <View style={styles.picinnercontainer}>
                <Image
                  style={styles.userimage}
                  source={require('../../images/roamprofile.png')}
                />
                <View style={styles.cameracontainer}>
                  <Image
                    source={require('../../images/photo-camera.png')}
                    style={styles.camerapic}
                  />
                </View>
              </View>
              <View style={styles.username}>
                <Text style={styles.usertxt}>Dunga</Text>
                <Text style={styles.usertxt2}>View profile</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Drawermenu iconcolor="#ffffff"
            iconname="home"
            titlename="Home"
            navigation={() => this.props.navigation.navigate('Homescreen')}
          />

          <Drawermenu iconcolor="#ffffff"
            iconname="history"
            titlename="Ride History"
            navigation={() => this.props.navigation.navigate('Ride')}
          />

          {/* <Drawermenu iconcolor="#ffffff"
            iconname="credit-card"
            titlename="Payment"
            navigation={() => this.props.navigation.navigate('Ride')}
          /> */}

          <Drawermenu iconcolor="#ffffff"
            iconname="question"
            titlename="Help"
            navigation={() => this.props.navigation.navigate('Help')}
          />
          <Drawermenu iconcolor="#ffffff"
            iconname="bell"
            titlename="Settings"
            navigation={() => this.props.navigation.navigate('Settings')}
          />
        </ScrollView>
      </View>
    );
  }
}
export default Drawer;
