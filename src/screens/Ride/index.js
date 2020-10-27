import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Platform,  ScrollView,} from 'react-native';
import styles from './style';
import {Container, Tab, Tabs} from 'native-base';
import New from './Tabs/New/index';
import Completed from './Tabs/Completed/index';
import Cancelled from './Tabs/Cancelled/index';
import Inprogress from './Tabs/Inprogress/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';

export default class Ride extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      // <Drawer
      // ref={(ref) => {
      //   this.drawer = ref;
      // }}
      // content={<SideBar navigation={this.props.navigation} />}
      // onClose={() => this.closeDrawer()}>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.mapContainer}>
            
              <View style={styles.messagecontainer}>
                <TouchableOpacity 
                  onPress={() => this.props.navigation.goBack()}
                  >
                  {/* <Image
                    style={{width: 25, height: 25}}
                    source={require('../../images/close-button.png')}
                  /> */}
                  <Icon style={{color: '#ffffff'}} size={17} name='arrow-left' />
                  <Text style={styles.backtxt}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.txt2}>Requests History</Text>
              </View>

              <Container>
                <Tabs tabBarUnderlineStyle={{backgroundColor: 'white', borderWidth: 0}}>
                  <Tab
                    activeTabStyle={{backgroundColor: 'white'}}
                    heading="New"
                    activeTextStyle={{color: 'black', fontSize: 14, fontWeight: "bold"}}
                    tabStyle={{backgroundColor: 'white'}}
                    textStyle={{color: '#A0A0A0', fontSize: 12}}>
                    <New
                      navigation={this.props.navigation}
                      navigation1={this.props.navigation1}
                    />
                  </Tab>
                  <Tab
                    activeTabStyle={{backgroundColor: 'white'}}
                    heading="In-Progress"
                    tabStyle={{backgroundColor: 'white'}}
                    textStyle={{color: '#A0A0A0', fontSize: 12}}
                    activeTextStyle={{color: 'black', fontSize: 14, fontWeight: "bold"}}>
                    <Inprogress
                      navigation={this.props.navigation}
                      navigation1={this.props.navigation1}
                    />
                  </Tab>
                  <Tab
                    activeTabStyle={{backgroundColor: 'white'}}
                    heading="Completed"
                    tabStyle={{backgroundColor: 'white'}}
                    textStyle={{color: '#A0A0A0', fontSize: 12}}
                    activeTextStyle={{color: 'black', fontSize: 14, fontWeight: "bold"}}>
                    <Completed
                      navigation={this.props.navigation}
                      navigation1={this.props.navigation1}
                    />
                  </Tab>
                  <Tab
                    activeTabStyle={{backgroundColor: 'white'}}
                    heading="Cancelled"
                    tabStyle={{backgroundColor: 'white'}}
                    textStyle={{color: '#A0A0A0', fontSize: 12}}
                    activeTextStyle={{color: 'black', fontSize: 14, fontWeight: "bold"}}>
                    <Cancelled
                      navigation={this.props.navigation}
                      navigation1={this.props.navigation1}
                    />
                  </Tab>
                </Tabs>
              </Container>
            
            </View>
          </ScrollView>
        </View>
      // </Drawer>
    );
  }
}
