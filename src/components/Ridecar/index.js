import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Ridecar extends Component {
  constructor(props) {
    super(props);
  }

  my_detailspage(){
    this.props.navigation.navigate('Loginnumber');
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.my_detailspage()}>
          <View style={styles.boxcontainer}>
            <View style={styles.justifycontainer}>
              <View style={styles.innercontainer}>
                <View style={styles.subinnercontainer}>
                  <View>
                    <Text style={[styles.txt1, {color: '#A0A0A0'}]} >
                      Origin
                    </Text>
                    <Text style={[styles.txt]}>
                      <Icon size={15} name="dot-circle-o" color="#A0A0A0" /> {this.props.origin}
                    </Text>
                    
                    <Text style={[styles.txt1, {color: '#A0A0A0'}]}>
                      Destination
                    </Text>
                    <Text style={[styles.txt]}>
                      <Icon size={15} name="minus-square-o" color="#A0A0A0" /> {this.props.destination}
                    </Text>

                    <Text style={[styles.txt1, {color: '#A0A0A0'}]}>
                      Package
                    </Text>
                    <Text style={[styles.txt]}>
                      <Icon size={15} name="archive" color="#A0A0A0" />  {this.props.packagetype} {this.props.packagequantity}
                    </Text>

                  </View>
                </View>
              </View>
            </View>

            <View style={{justifyContent: 'center', marginTop: 9}}>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20,fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',fontWeight: 'bold', color: '#008716', justifyContent: 'flex-end',  marginRight:10, alignText: 'flex-end',}}>
                  {this.props.price}
                </Text>

                <Text style={[styles.txt1, {fontSize: 12, marginRight:10, alignText: 'flex-end', textAlign: 'right'}]}>
                  {this.props.date}
                </Text>
                <Text style={[styles.txt1, {fontSize: 12, marginRight:10, alignText: 'flex-end', textAlign: 'right'}]}>
                  {this.props.time}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
