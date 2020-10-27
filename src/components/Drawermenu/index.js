import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class Drawermenu extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.navigation}>
        <View style={styles.container}>
          <View style={styles.iconcontainer}>
            <Icon size={17} style={{color: this.props.iconcolor}} name={this.props.iconname} />
            {/* <Icon name="rocket" size={30} color="#900" /> */}
          </View>
          <View style={styles.titlecontainer}>
            <Text style={[styles.titletxt], {color: this.props.iconcolor}}>{this.props.titlename}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default Drawermenu;
