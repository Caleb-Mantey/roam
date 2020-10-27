import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

export default class Invitepage extends Component {
  render() {
    return (
      <View>
        <View style={styles.imagecontainer}>
          <Image
            source={this.props.Adimage}
            style={{width: 120, height: 120}}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.titletxt}>{this.props.maintxt}</Text>
          <Text style={styles.descriptiontxt}>{this.props.description}</Text>
        </View>
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttontxt}>{this.props.btn1}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttontxt}>{this.props.btn2}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
