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
import {Button, Text, Textarea} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default class PickupTime extends Component {
  constructor() {
    super();
  }

  state = {
    isDatePickerVisible: false,
    isTimePickerVisible: false,
    date: '',
    time: '',
  };

  showDatePicker = () => {
    this.setState({
      isDatePickerVisible: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    this.setState({
      date: date.toDateString(),
    });
    this.hideDatePicker();
  };

  showTimePicker = () => {
    this.setState({
      isTimePickerVisible: true,
    });
  };

  hideTimePicker = () => {
    this.setState({
      isTimePickerVisible: false,
    });
  };

  handleTimeConfirm = (time) => {
    console.warn('A time has been picked: ', time);
    this.setState({
      time: time.toTimeString(),
    });
    this.hideTimePicker();
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground
        source={require('../../images/parcel-delivery.png')}
        style={{width: '100%', height: '100%'}}></ImageBackground> */}
        <View style={styles.header}>
          <View style={styles.headerimagecontainer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{width: 15, height: 15}}
                source={require('../../images/left-arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titlecontainer}>
            <View>
              <Text style={styles.titletxt}>Pickup Date & Time</Text>
            </View>
          </View>
          {/* <View style={styles.toprighttxt}>
            <TouchableOpacity>
              <Text style={[styles.titletxt, {color: '#19b5fe'}]}>SAVE</Text>
            </TouchableOpacity>
          </View> */}
        </View>

        <View style={styles.textinputcontainer}>
          <View style={styles.textinput1}>
            <Text
              onPress={this.showDatePicker}
              style={{fontSize: 15, color: '#A0A0A0'}}>
              {this.state.date == '' ? 'Pickup Date' : this.state.date}
            </Text>
          </View>
          <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            mode="date"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
          />
          <View style={styles.textinput1}>
            <Text
              onPress={this.showTimePicker}
              style={{fontSize: 15, color: '#A0A0A0'}}>
              {this.state.time == '' ? 'Pickup Time' : this.state.time}
            </Text>
          </View>
          <DateTimePickerModal
            isVisible={this.state.isTimePickerVisible}
            mode="time"
            onConfirm={this.handleTimeConfirm}
            onCancel={this.hideTimePicker}
          />
        </View>

        <View style={{marginVertical: 20, marginHorizontal: 30}}>
          <Textarea rowSpan={5} bordered placeholder="Description...." />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <Button
            dark
            style={{borderRadius: 8, width: 110, justifyContent: 'center'}}
            onPress={() => {
              this.props.navigation.navigate('Addpayments');
            }}>
            <Text style={{fontSize: 18}}> Next </Text>
          </Button>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            paddingHorizontal: 20,
            flex: 1,
          }}>
          <Image
            style={{flex: 1, width: '100%', height: '100%'}}
            source={require('../../images/parcel-delivery-guy.png')}
          />
        </View>
      </View>
    );
  }
}
