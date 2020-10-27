import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import styles from './style';
import {Button, Text, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PackageType extends Component {
  constructor() {
    super();
    this.setFl = this.setFl.bind(this);
    this.setbox = this.setbox.bind(this);
  }

  state = {
    file: false,
    box: false,
  };

  setFl() {
    this.setState({
      file: !this.state.file,
    });
  }

  setbox() {
    this.setState({
      box: !this.state.box,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerimagecontainer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              {/* <Image
                style={{width: 25, height: 25}}
                source={require('../../images/close-button.png')}
              /> */}
              <Icon style={{color: '#ffffff'}} size={17} name='arrow-left' />
              <Text style={styles.backtxt}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image
            // style={{width: 15, height: 15}}
            source={require('../../images/loader_main.gif')}
            style={{ width: '100%',
            marginTop: 0,
            height: undefined,
            aspectRatio: 1}}
          />

        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 0, marginLeft: 15}}>
          <Text style={{color: '#ffbe00', fontSize: 25, fontWeight: 'bold'}}>Connecting you to a Rider</Text>
          <Text style={{fontSize: 15, marginTop: 10, color: '#ffffff'}}>Request Successful</Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            paddingHorizontal: 20,
            height: '40%',
          }}>
            {/* <TouchableOpacity
              style={{
                alignSelf: 'flex-end'
              }}
              onPress={() => {
                this.props.navigation.navigate('Loginnumber');
              }}>
              <Text style={styles.nexttxt}>Continue</Text>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../images/next-button.png')}
              />
            </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}
