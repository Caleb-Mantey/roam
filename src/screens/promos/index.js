import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Drawer} from 'native-base';
import SideBar from '../Drawer/index';

export default class Promos extends Component {
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
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../images/promos_background.png')}
            style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.headerimagecontainer}>
                  <TouchableOpacity onPress={() => this.openDrawer()}>
                    <Image
                      style={{width: 15, height: 15, tintColor: 'white'}}
                      source={require('../../images/menu.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.titlecontainer}>
                  <View>
                    <Text style={styles.titletxt}>Promos</Text>
                  </View>
                </View>
              </View>

              <View style={styles.bannercontainer}>
                <Image
                  source={require('../../images/Promos_banner.png')}
                  style={{width: 100, height: 100}}
                />
              </View>
              <View style={styles.bannerline}>
                <Text style={styles.bannerlinetxt}>
                  Add and view your Lyft promo{'\n'}codes here
                </Text>
              </View>

              <View style={styles.textinputcontainer}>
                <View style={styles.textinputview}>
                  <TextInput
                    placeholder="Enter promo code"
                    style={styles.textinputtxt}></TextInput>
                </View>
              </View>

              <View style={styles.promoscardcontainer}>
                <TouchableOpacity>
                  <View style={styles.cardinnercontainer}>
                    <Icon size={15} name="credit-card" style={styles.icon1} />
                    <Text style={styles.cardtxt}>Gift Lyft to friends</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.promoscardcontainer}>
                <TouchableOpacity>
                  <View style={styles.cardinnercontainer}>
                    <Icon size={18} name="gift" style={styles.icon2} />
                    <Text style={styles.cardtxt}>Refer & earn</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Drawer>
    );
  }
}
