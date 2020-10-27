import React, {Component} from 'react';
import { useRef, useState } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
  ToastAndroid
  // StyleSheet
} from 'react-native';
import styles from './style';
import Savelocations from '../../components/Savelocations/index';
import {Drawer, Button, Text, Textarea, CheckBox} from 'native-base';
import SideBar from '../Drawer/index';
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Swiper from 'react-native-swiper';
import IntlPhoneInput from 'react-native-intl-phone-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-community/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import apicalls from '../../provider/apicalls.js';

// import PickerCheckBox from 'react-native-picker-checkbox';
 
var mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];
 



//Maps APIKEY - AIzaSyAd-GBXC070KKEDpCz7Wj0evZtcfx9LND8
class Homescreen extends Component {
  constructor(props) {
    super(props);

    this.get_stored_data();
  
    var today = new Date();
    var ampm = today.getHours()  >= 12 ? 'pm' : 'am';
    var time = today.getHours() + ":" + today.getMinutes() + " " + ampm;

    this.state = {
      modalVisible: false,
      modalPickupVisible: false,
      modalDropoffVisible: false,
      place: 'ama',
      isDatePickerVisible: false,
      isTimePickerVisible: false,
      date: '',
      time: '',
      country: null,
      city: null,
      cities: [],
      showAlert: false,
      nexttxt: 'Next',
      paycash_check: false,
      time_now: time,
      pickup_lat :'5.614019',
      pickup_long :'-0.235718',
      dropoff_lat :'5.578770',
      dropoff_long :'-0.232846',
      totalamount :'10.00',
    };
    
     
    const items = [
      {
        itemKey:1,
        itemDescription:'Item 1'
        },
      {
        itemKey:2,
        itemDescription:'Item 2'
        },
      {
        itemKey:3,
        itemDescription:'Item 3'
        }
    ];

    
    if(this.swiperRef == undefined) {
      this.swiperRef = "swiper";
    }else{
      this.swiperRef = swiper => this.swiper = swiper;
    }


    this.scrollHandler = page => {
      console.log ('Page ',page,this.swiper)
      this.swiper && this.swiper.scrollBy(page, true)
    }

    this.my_pageindex = 0;

    this.setFl = this.setFl.bind(this);
    this.setbox = this.setbox.bind(this);

  }

  async get_stored_data(){
    const jsonValue = await AsyncStorage.getItem('@loggedin');

    const code = await AsyncStorage.getItem('@code');
    const firstname = await AsyncStorage.getItem('@firstname');
    const othername = await AsyncStorage.getItem('@othername');
    const phone = await AsyncStorage.getItem('@phone');

    this.setState({
      requestorcode: code,
      requestorname: firstname + " " + othername,
      requestorphone: phone,
    });

  }


  handleConfirm(pItems){
    console.log('pItems =>', pItems);
  }


  state = {
    file: false,
    box: false,
  };

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  // Dropdown Start
  changeCountry(item) {
    let city = null;
    let cities;

    this.setState({itemtype: item.value})

    switch (item.value) {
        case 'fr':
            cities = [
                {label: 'Paris', value: 'paris'}
            ];
        break;
        case 'es':
            cities = [
                {label: 'Madrid', value: 'madrid'}
            ];
        break;
    }

    this.setState({
        city,
        cities
    });
  }

  changeCity(item) {
      this.setState({
          city: item.value
      });
      
  }
  // Dropdown End


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

  closeDrawer() {
    this.drawer._root.close();
  }
  openDrawer() {
    this.drawer._root.open();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalclose = () => {
    this.setState({modalVisible: false});
  };

  setModalPickupclose = () => {
    this.setState({modalPickupVisible: false});
  };

  setModalDropoffclose = () => {
    this.setState({modalDropoffVisible: false});
  };

  


  setValue(value) {
    this.setState({
      place: value,
    });
  }

  my_nextslide(){
    this.refs.swiper.scrollBy(1);
    this.my_pageindex = this.my_pageindex + 1;

    if(this.my_pageindex < 1){
      this.setState({
        nexttxt: "Next"
      });
    }else{
      this.setState({
        nexttxt: "Confirm Request"
      });
    }

    if(this.my_pageindex > 1){
      this.my_pageindex = 0;
      console.log(this.my_pageindex);
      this.post_request();
      // this.showAlert();
    }

  }

  post_request(){
    
    var data = {
      actions: 'clientmakerequest',
      pickup_location: this.state.pickup_location,
      dropoff_location: this.state.dropoff_location,
      pickup_lat: this.state.pickup_lat,
      pickup_long: this.state.pickup_long,
      dropoff_lat: this.state.dropoff_lat,
      dropoff_long: this.state.dropoff_long,
      itemtype: this.state.itemtype,
      recepientname: this.state.recepientname,
      recepientphone: this.state.recepientphone,
      requestnote: this.state.requestnote,
      totalamount: this.state.totalamount,
      requestorcode: this.state.requestorcode ,
      requestorname: this.state.requestorname ,
      requestorphone: this.state.requestorphone ,
    }

    this.setState({
      nexttxt: "Next"
    });

    console.log(data)     

    apicalls.postdata(data).then(data => {
      console.log(data)     
      if(data.msg == "success"){
        ToastAndroid.show(data.data, ToastAndroid.SHORT);
        this.setState({modalVisible: false});
        this.props.navigation.navigate('PackageType');
      }else if(data.msg == "error"){
        ToastAndroid.show(data.data, ToastAndroid.SHORT);
      }else{
        this.props.navigation.navigate('PackageType');
      }      
    })      

  }

  my_previousslide(){
    this.refs.swiper.scrollBy(-1);
    this.my_pageindex = this.my_pageindex - 1;

    if(this.my_pageindex < 1){
      this.setState({
        nexttxt: "Next"
      });
    }else{
      this.setState({
        nexttxt: "Confirm Request"
      });
    }

    if(this.my_pageindex < 0){
      this.my_pageindex = 0;
      this.setState({modalVisible: false});
    }
    
  }

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

  componentWillReceiveProps(props) {
    this.setState(this.initState(props));    
    if(props.yourNewPageIndex){
      this.scrollBy(props.yourNewPageIndex)
    }
  }

  checkboxpress() {
    this.setState({
      paycash_check: !this.state.paycash_check,
    });
  }
  

  render() {
    const {showAlert} = this.state;

    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
      main: {paddingLeft: 3},
    }

    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<SideBar navigation={this.props.navigation} />}
        onClose={() => this.closeDrawer()}
        >

        <View style={styles.container}>
          <ScrollView>
        
            <AwesomeAlert
              show={showAlert}
              showProgress={false}
              title="Submit Request"
              message="Do you want to submit Request?"
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={true}
              confirmButtonColor="#AEDEF4"
              cancelText="No, cancel"
              confirmText="Yes, submit Request"
              confirmButtonColor="#078700"
              onCancelPressed={() => {
                this.hideAlert();
              }}
              onConfirmPressed={() => {
                // this.hideAlert();
                this.post_request();
              }}
            />

            <View style={styles.mapContainer}>
              <MapView
                  style={{flex: 1, position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,}}
                  customMapStyle={mapStyle}
                  initialRegion={{
                    latitude: 23.0321,
                    longitude: 72.5252,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />

                <View style={styles.menubuttoncontainer}>
                  <TouchableOpacity onPress={() => this.openDrawer()}>
                    <View style={styles.menucontainer}>
                      {/* <Image
                        source={require('../../images/menu.png')}
                        style={{width: 15, height: 15}}
                      /> */}
                      <Icon style={{color: '#ffffff', marginLeft:13, marginTop:3}} size={15} name='bars' />
                    </View>
                  </TouchableOpacity>
                </View>
            
              <View style={styles.messcontainer}>
                <View style={styles.messagecontainer}>
                  <Text style={styles.txt1}>Hey!</Text>
                  <Text style={styles.txt2}>What's the <Text style={{fontWeight: "bold",fontSize: 25, color: '#ffbe00'}}>pick-up</Text> location?</Text>
                </View>

                <View style={styles.searchcontainer}>
                  <View style={styles.searchicon}>
                    <Image
                      source={require('../../images/searcher.png')}
                      style={{width: 15, height: 15}}
                    />
                  </View>
                  <View style={{justifyContent: 'center', flex: 1}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                      <Text
                        style={{fontSize: 16, fontFamily: 'proximanova-regular', color: '#ffffff'}}>
                        eg. North Kaneshie
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

             
            </View>

          </ScrollView>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.setModalclose}>

          <View
            style={styles.modalcontainer}
            keyboardShouldPersistTaps="always">
            
            <View style={styles.modalheader}>
              <View style={styles.modelcancel}>
                <TouchableOpacity 
                  onPress={() => this.my_previousslide()}
                  >
                    <Icon style={{color: '#ffffff'}} size={17} name='arrow-left' />
                  <Text style={styles.titletxt}>Back</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.sliderbox}>
              <Swiper
                  index={1}
                  // ref='swiper' 
                  ref={ this.swiperRef }
                  index={0}
                  showsButtons={false} 
                  loop={false} 
                  showsPagination={false}
                >
                
                <View style={styles.slide1}>
                  <ScrollView style={styles.scrollView}>
                    
                    <View style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 15}}>
                      <Text style={styles.txt}>What's the  <Text style={{fontWeight: "bold", fontSize: 22, color: '#ffbe00'}}>pick-up</Text> location? </Text>
                    </View>
                    <View style={styles.searchbox}>
                      <View style={styles.inputcontainer}>
                        <TextInput
                          placeholder="eg. Achimota"
                          placeholderTextColor="#A0A0A0"
                          value={this.state.pickup_location}
                          style={{backgroundColor: '#ffffff', height: 40, fontSize: 15, borderBottomWidth: 0.5, width: '95%', marginHorizontal:5, borderBottomWidth: 0, borderRadius: 5,}}
                          onChangeText={(text) => this.setState({pickup_location: text})}
                        />
                      </View>
                    </View>

                    <View style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 15}}>
                      <Text style={styles.txt}>What's the <Text style={{fontWeight: "bold",fontSize: 22, color: '#ffbe00'}}>drop-off</Text> location?</Text>
                    </View>
                    <View style={styles.searchbox}>
                      <View style={styles.inputcontainer}>
                        <TextInput
                          placeholder="eg. Awudome"
                          placeholderTextColor="#A0A0A0"
                          value={this.state.dropoff_location}
                          style={{backgroundColor: '#ffffff', height: 40, fontSize: 15, borderBottomWidth: 0.5, width: '95%', marginHorizontal:5, borderBottomWidth: 0, borderRadius: 5,}}
                          onChangeText={(text) => this.setState({dropoff_location: text})}
                        />
                      </View>
                    </View>
                    
                    <View style={{alignSelf: 'flex-start', marginTop: 8, marginLeft: 15}}>
                      <Text style={styles.txt}>What <Text style={{fontWeight: "bold",fontSize: 20, color: '#ffbe00'}}>item</Text> are you moving?</Text>
                    </View>
                    
                    <View style={styles.txtconatiner, [{marginHorizontal: 16}]}>
                      <DropDownPicker
                              items={[
                                  {label: 'Food', value: 'food'},
                                  {label: 'Folder', value: 'folder'},
                                  {label: 'Box', value: 'box'}
                              ]}
                              defaultNull
                              placeholder="Select your service provider"
                              containerStyle={{height: 40}}
                              onChangeItem={item => this.changeCountry(item)}
                          />
                    </View>

                    
                    <View style={{alignSelf: 'flex-start', marginTop: 8, marginLeft: 15}}>
                      <Text style={styles.txt}><Text style={{fontWeight: "bold",fontSize: 20, color: '#ffbe00'}}>Recepient's Details</Text></Text>
                    </View>
                    
                    
                    <View style={{flex: 1, flexDirection: 'row',height: 20, marginBottom: 40, marginTop: 8, marginLeft: 10}}>
                      <View >
                        <TextInput
                          placeholder="Name"
                          placeholderTextColor="#A0A0A0"
                          style={{backgroundColor: '#ffffff', height: 40, fontSize: 15, borderBottomWidth: 0.5, width: 180, marginHorizontal:5, borderBottomWidth: 0, borderRadius: 5,}}
                          onChangeText={(text) => this.setState({recepientname: text})}
                        />
                      </View>
                      <View >
                        <TextInput
                          placeholder="Phone Number"
                          placeholderTextColor="#A0A0A0"
                          style={{backgroundColor: '#ffffff', height: 40, fontSize: 15, borderBottomWidth: 0.5, width: 140, marginHorizontal:5, borderBottomWidth: 0, borderRadius: 5,}}
                          onChangeText={(text) => this.setState({recepientphone: text})}
                        />
                      </View>

                    </View>

                    <View style={{alignSelf: 'flex-start', marginTop: 8, marginLeft: 15}}>
                      <Text style={styles.txt}><Text style={{fontWeight: "bold",fontSize: 20, color: '#fff'}}>Note</Text></Text>
                    </View>

                    <View>
                      <Textarea rowSpan={4} style={{marginHorizontal: 16, color: '#fff'}} bordered placeholder="What do you want to tell...." onChangeText={(text) => this.setState({requestnote: text})} />
                    </View>

                  </ScrollView>

                </View>

                <View style={styles.slide5}>
                    <View style={{alignSelf: 'flex-start', width: 400 }}>

                      <View style={{height: 300}}>
                        <MapView
                          style={{flex: 1, position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,}}
                          customMapStyle={mapStyle}
                          initialRegion={{
                            latitude: 23.0321,
                            longitude: 72.5252,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                          }}
                        />

                      </View>
                    </View>

                    <View style={{alignSelf: 'flex-start', marginBottom: 10, marginLeft: 15, width: 300 }}>
                      <View style={styles.txtconatiner}>
                        <Image
                          // style={{width: 15, height: 15}}
                          source={require('../../images/deliverybike.png')}
                          style={{ width: '28%',
                          marginTop: 25,
                          marginLeft: 130,
                          height: undefined,
                          aspectRatio: 1}}
                        />
                      </View>
                      <View style={{flex: 1, flexDirection: 'column',height: 300, width: '100%', marginBottom: 0, marginTop: 0, marginLeft: 15}}>
                        <View style={{marginTop: 10, width: '100%',}}>  
                          {/* <Text style={styles.txt2}> */}
                            <Text style={{fontSize: 25,  color: '#fff'}}>Roam</Text> 
                            <Text style={{fontSize: 25, color: '#fff', alignSelf: 'flex-end', fontWeight: "bold", color: '#ffbe00', marginLeft: 0,}}> GHS 10.00</Text>
                            {/* </Text> */}
                        </View>
                        <View style={{marginTop: 20}}>  
                          <Text style={styles.txt2, [{marginTop: 10}]}><Text style={{fontSize: 25, color: '#ffbe00'}}>{this.state.time_now}</Text></Text>
                        </View>
                        <View style={{marginTop: 10}}>  
                          <Text style={{fontSize: 10, color: '#fff', marginTop: 35}}> Easy, Fast, Reliable delivery.</Text>
                        </View>
                      </View>


                    </View>
                  </View>

              </Swiper>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                paddingHorizontal: 20,
                height: '20%',
                paddingTop: 0,
              }}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end'
                  }}
                  
                  // onPress={() => {
                  //   this.setModalclose();
                  //   this.props.navigation.navigate('PackageType');
                  // }}

                  onPress={() => this.my_nextslide()}
                  >
                  <Text style={styles.nexttxt}>{this.state.nexttxt}</Text>
                  <Icon style={{color: '#ffffff', alignSelf: 'flex-end',}} size={17} name='arrow-right' />
                </TouchableOpacity>
            </View>

          </View>
        </Modal>
      
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalPickupVisible}
          onRequestClose={this.setModalPickupclose}>

          <View
            style={styles.modalcontainer}
            keyboardShouldPersistTaps="always">
            
            <View style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 15}}>
              <Text style={styles.txt}>What's the <Text style={{fontWeight: "bold",fontSize: 22, color: '#ffbe00'}}>drop-off</Text> location?</Text>
            </View>
            <View style={styles.searchbox}>
              <View style={styles.modalsearchcontainer}>
                <GooglePlacesAutocomplete
                  placeholder="Pickup location"
                  enablePoweredByContainer={false}
                  styles={{
                    textInputContainer: {
                      backgroundColor: 'rgba(0,0,0,0)',
                      fontSize: 15, 
                      borderTopWidth: 0,
                      backgroundColor: '#121111',
                      borderBottomWidth: 0,
                      height: 50,
                    },
                    textInput: {
                      marginLeft: 0,
                      marginRight: 0,
                      height: 38,
                      color: '#5d5d5d',
                      fontSize: 16,
                    },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                  }}
                  onPress={(data, details = null) => {
                    console.log(data, details);
                  }}
                  query={{
                    key: 'AIzaSyAd-GBXC070KKEDpCz7Wj0evZtcfx9LND8',
                    language: 'en',
                  }}
                  GooglePlacesDetailsQuery={{fields: 'geometry'}}
                  onChangeText={(text) => this.setState({dropoff_location: text})}
                />
              </View>
            </View>

          </View>

        </Modal>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalDropoffVisible}
          onRequestClose={this.setModalDropoffclose}>

          <View
            style={styles.modalcontainer}
            keyboardShouldPersistTaps="always">
            
            <View style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 15}}>
              <Text style={styles.txt}>What's the <Text style={{fontWeight: "bold",fontSize: 22, color: '#ffbe00'}}>drop-off</Text> location?</Text>
            </View>
            <View style={styles.searchbox}>
              <View style={styles.modalsearchcontainer}>
                <GooglePlacesAutocomplete
                  placeholder="Pickup location"
                  enablePoweredByContainer={false}
                  styles={{
                    textInputContainer: {
                      backgroundColor: 'rgba(0,0,0,0)',
                      fontSize: 15, 
                      borderTopWidth: 0,
                      backgroundColor: '#121111',
                      borderBottomWidth: 0,
                      height: 50,
                    },
                    textInput: {
                      marginLeft: 0,
                      marginRight: 0,
                      height: 38,
                      color: '#5d5d5d',
                      fontSize: 16,
                    },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                  }}
                  onPress={(data, details = null) => {
                    console.log(data, details);
                  }}
                  query={{
                    key: 'AIzaSyAd-GBXC070KKEDpCz7Wj0evZtcfx9LND8',
                    language: 'en',
                  }}
                  GooglePlacesDetailsQuery={{fields: 'geometry'}}
                  onChangeText={(text) => this.setState({dropoff_location: text})}
                />
              </View>
            </View>

          </View>

        </Modal>
      
      </Drawer>
    );
  }
}

export default Homescreen;
