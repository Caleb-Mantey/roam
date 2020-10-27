import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Alert ,
} from 'react-native';
import styles from './style';
import Userdetails from '../../components/userprofile/index';
import {Drawer} from 'native-base';
import SideBar from '../Drawer/index';

export default class Userprofile extends Component {
  openDrawer() {
    this.drawer._root.open();
  }
  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<SideBar navigation={this.props.navigation} />}>
        <View style={styles.container}>
          <ImageBackground
            style={{width: '100%', height: 200}}
            source={require('../../images/roamprofile.png')}>
            <View style={styles.headercontainer}>
              <View style={styles.header}>
                <View>
                  <TouchableOpacity onPress={() => this.openDrawer()}>
                    <Image
                      source={require('../../images/menu.png')}
                      style={{width: 20, height: 20, tintColor: 'white'}}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Editprofile')
                    }>
                    <Text style={styles.headertxt}>EDIT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.usernamecontainer}>
            <Text style={styles.username}>Dunga Wade</Text>
          </View>

          <View style={styles.joindatecontainer}>
            <Text style={styles.datetxt}>JOINED DECEMBER 2018</Text>
          </View>

          <View style={{marginTop: 10}}>
            <Userdetails iconname="user" label="FullName" text="From  Accra,Mallam." />
            <Userdetails iconname="phone" label="Phone"  text="Available" />
            <Userdetails iconname="envelope" label="Email"  text="Available" />
          </View>

          <View style={{marginTop: 20}}>
            <Button
              title="Update"
              style={{paddingHorizontal: 20}}
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View>


        </View>
      </Drawer>
    );
  }
}
