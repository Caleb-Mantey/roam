import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  MapView,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Scheduleiride extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
           {/* <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 23.0321,
              longitude: 72.5252,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          /> */}
            <View style={{flex: 1}}></View>
          <View style={styles.menubuttoncontainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Ride')}>
              <View style={styles.menucontainer}>
                <Image
                  source={require('../../images/close-button.png')}
                  style={{width: 12, height: 12}}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.searchBox}>
            <View style={styles.searchBoxview}>
              <View style={styles.searchBoxinnerview}>
                <TouchableOpacity style={styles.pickuplocation}>
                  <View>
                    <Text style={styles.locationtxt}>7th Ave & 221b </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.directionarrow}>
                  <Icon
                    size={15}
                    name="arrow-right"
                    style={{color: '#A0A0A0'}}
                  />
                </View>
                <TouchableOpacity style={styles.droplocation}>
                  <View>
                    <Text style={styles.locationtxt}>
                      New York Public Library-Steph
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.Titletxt}>Schedule a ride</Text>
          <Text style={styles.timetxt}>Pickup between 9:35 - 9:50 AM</Text>
        </View>

        <View style={styles.scheduleview}>
          <TouchableOpacity>
            <View style={styles.scheduleinnerview}>
              <Text style={styles.scheduletxt1}>Pickup time</Text>
              <Text style={styles.scheduletxt2}>9:35 AM</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.scheduleview}>
          <TouchableOpacity>
            <View style={styles.scheduleinnerview}>
              <Text style={styles.scheduletxt1}>Date</Text>
              <Text style={styles.scheduletxt2}>Wed, Jan 2, 2019</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity>
            <Text style={styles.btntxt}>Set pickup time</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
