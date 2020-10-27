import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Userdetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconcontainer}>
          <Icon name={this.props.iconname} size={17} />
          <Text style={styles.texttxt}>{this.props.label}: </Text>
        </View>
        <View style={styles.textcontainer}>
          {/* <Text style={styles.texttxt}>{this.props.text}</Text> */}
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#A0A0A0"
            value={this.props.text}
            style={{fontSize: 15, borderBottomWidth: 0.5}}
          />
        </View>
      </View>
    );
  }
}
