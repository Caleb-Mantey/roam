import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

export default class Ridefooter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <View>
            <TouchableOpacity onPress={this.props.navigation}>
              <View style={styles.viewcontainer}>
                <View style={styles.iconcontainer}>
                  <Icon size={15} name={this.props.iconname1} />
                </View>
                <View style={styles.textcontainer}>
                  <Text style={styles.txt}>{this.props.textname1}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={this.props.navigation1}>
              <View style={styles.viewcontainer}>
                <View style={styles.iconcontainer}>
                  <Icon size={15} name={this.props.iconname2} />
                </View>
                <View style={styles.textcontainer}>
                  <Text style={styles.txt}>{this.props.textname2}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
