import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import styles from './style';
import Carousel from 'react-native-carousel-view-br';
import Invite from '../../components/invitepage/index';
import {Drawer} from 'native-base';
import SideBar from '../Drawer/index';

export default class InviteFriends extends Component {
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
                <Text style={styles.titletxt}>Invite friends</Text>
              </View>
            </View>
            <View style={styles.toprighttxt}>
              <TouchableOpacity>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../images/share.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.codecontainer}>
            <Text style={styles.codetxt}>Your code:</Text>
            <Text style={styles.titletxt}> SHERLOCK221</Text>
          </View>

          <View style={{backgroundColor: 'white'}}>
            <Carousel
              height={350}
              delay={20000}
              indicatorAtBottom={true}
              indicatorSize={50}
              indicatorText="."
              inactiveIndicatorText="."
              indicatorColor="black"
              indicatorSpace={10}>
              <View>
                <Invite
                  Adimage={require('../../images/invitefriends.png')}
                  maintxt="Invite Passengers"
                  description="Invite your friends to ride with Lyft so they can get going now!"
                  btn1="Send text"
                  btn2="Send email"
                />
              </View>
              <View>
                <Invite
                  Adimage={require('../../images/invitefriends.png')}
                  maintxt="Invite Passengers"
                  description="Invite your friends to ride with Lyft so they can get going now!"
                  btn1="Send text"
                  btn2="Send email"
                />
              </View>
            </Carousel>
          </View>

          <View style={styles.footercontainer}>
            <View style={styles.footerinnercontainer}>
              <Text style={styles.messagetxt}>
                Enable contacts and refer friends to be{'\n'}a part of the Lyft
                experience
              </Text>
              <View style={styles.buttoncontainer}>
                <TouchableOpacity>
                  <Text style={styles.btntxt}>Allow</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Drawer>
    );
  }
}
