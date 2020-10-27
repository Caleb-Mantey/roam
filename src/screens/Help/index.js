import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import styles from './style';
import {Drawer} from 'native-base';
import SideBar from '../Drawer/index';

export default class Help extends Component {
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
          <View style={styles.header}>
            <View style={styles.headerimagecontainer}>
              <TouchableOpacity onPress={() => this.openDrawer()}>
                <Image
                  style={{width: 15, height: 15}}
                  source={require('../../images/menu.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.titlecontainer}>
              <View>
                <Text style={styles.titletxt}>Help</Text>
              </View>
            </View>
          </View>

          <ScrollView>
            <View>
              {/* <View style={styles.headtitle}>
                <Text style={styles.headtitletxt}>Welcome to Lyft</Text>
                <Image
                  source={require('../../images/ride_pass.png')}
                  style={{width: '100%', height: 150, marginTop: 15}}
                />
              </View> */}

              <View style={styles.headtitle}>
                <Text style={styles.headtitletxt}>Get help</Text>
                <View style={styles.border}></View>
                <View style={styles.borderview}>
                  <TouchableOpacity>
                    <Text style={styles.optiontxt}>Can't request a ride</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.borderview}>
                  <TouchableOpacity>
                    <Text style={styles.optiontxt}>
                      Payment info not accepted
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.borderview}>
                  <TouchableOpacity>
                    <Text style={styles.optiontxt}>
                      Promo, credit, or coupon issue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/*
              <View style={styles.border}></View>
              {/* <View style={styles.headtitle}>
                <Text style={styles.headtitletxt}>Get help</Text>
              </View>

              <View style={styles.gridcontainer}>
                <View style={styles.gridview}>
                  <TouchableOpacity>
                    <View style={styles.gridifirstview}></View>
                    <View style={styles.gridimage}>
                      <Image
                        source={require('../../images/sherlock.jpg')}
                        style={styles.gridimages}
                      />
                    </View>
                    <View style={styles.gridviewtext}>
                      <Text style={styles.gridtxt}>
                        Profile and account settings
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.gridview}>
                  <TouchableOpacity>
                    <View style={styles.gridifirstview}></View>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Image
                        source={require('../../images/sherlock.jpg')}
                        style={styles.gridimages}
                      />
                    </View>
                    <View style={styles.gridviewtext}>
                      <Text style={styles.gridtxt}>
                        Promos, credits and rewards
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View> */}
            </View>
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}
