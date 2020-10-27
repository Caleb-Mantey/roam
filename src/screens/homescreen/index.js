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
  ToastAndroid,
  Dimensions
  // StyleSheet
} from 'react-native';
import styles from './style';
import Savelocations from '../../components/Savelocations/index';
import {Drawer, Button, Text, Textarea, CheckBox} from 'native-base';
import SideBar from '../Drawer/index';
import MapView, {Marker} from 'react-native-maps';
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

import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoding';
import RNRestart from 'react-native-restart';

//import firebase from '../../provider/firebaseconfig';
import firestore from '@react-native-firebase/firestore';

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
const GOOGLE_MAPS_APIKEY = 'AIzaSyAd-GBXC070KKEDpCz7Wj0evZtcfx9LND8';
const {width, height} = Dimensions.get('window');
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
      coords: null,
      error: null,
      origin: null,
      destination: null,
      rideInfo: null,
      requestorcode: null,
      requestorname: null,
      requestorphone: null,
      requestor_onesignal: null,
      clientstatus: null,
      requestcode: null,
      request_verification_code: null,
      rider_onesignalplayerid: null,
      ridercode: null,
      rider_name: null,
      rider_phone: null,
      mapdetails_show: false,
      rider_loc_log: 5.622305,
      rider_loc_lat: 5.622305,
      pickup_loc_log: 5.622305,
      pickup_loc_lat: 5.622305,
      dropoff_loc_log: 5.622305,
      dropoff_loc_lat: 5.622305
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

    Geocoder.init(GOOGLE_MAPS_APIKEY);
  }

  async get_stored_data(){

    let values = await AsyncStorage.multiGet(['@loggedin', '@code', '@firstname', '@othername', '@phone', '@playerid_rider','@clientstatus', '@requestcode', '@rider_onesignalplayerid']);

    const jsonValue = values[0][1];
    const code = values[1][1];
    const firstname = values[2][1];
    const othername = values[3][1];
    const phone = values[4][1];
    const requestor_onesignal__ = values[5][1];
    const clientstatus = values[6][1];
    const requestcode = values[7][1];
    const rider_onesignalplayerid = values[8][1];

    console.log("clientstatus");
    console.log(clientstatus);

    const request_verification_code = requestcode.substring(requestcode.length - 4);

    this.setState({
      requestorcode: code,
      requestorname: firstname + " " + othername,
      requestorphone: phone,
      requestor_onesignal: requestor_onesignal__,
      clientstatus: clientstatus,
      requestcode: requestcode,
      request_verification_code: request_verification_code,
      rider_onesignalplayerid: rider_onesignalplayerid
    });


    // if(clientstatus == "acceptedrequest"){
      let values_ = await AsyncStorage.multiGet(['@ridercode', '@rider_name', '@rider_phone', '@rider_loc_log', '@rider_loc_lat', '@pickup_loc_log', '@pickup_loc_lat', '@dropoff_loc_log', '@dropoff_loc_lat', '@mapdetails_show']);


      const ridercode = values_[0][1];
      const rider_name = values_[1][1];
      const rider_phone = values_[2][1];

      const rider_loc_log = values_[3][1];
      const rider_loc_lat = values_[4][1];
      const pickup_loc_log = values_[5][1];
      const pickup_loc_lat = values_[6][1];
      const dropoff_loc_log = values_[7][1];
      const dropoff_loc_lat = values_[8][1];
      const mapdetails_show = values_[9][1];
  
  
      this.setState({
        ridercode: ridercode,
        rider_name: rider_name,
        rider_phone: rider_phone,
        rider_loc_log: parseFloat(rider_loc_log),
        rider_loc_lat: parseFloat(rider_loc_lat),
        pickup_loc_log: parseFloat(pickup_loc_log),
        pickup_loc_lat: parseFloat(pickup_loc_lat),
        dropoff_loc_log: parseFloat(dropoff_loc_log),
        dropoff_loc_lat: parseFloat(dropoff_loc_lat),
        mapdetails_show: mapdetails_show
      });  

      console.log("ridercode");
      console.log(mapdetails_show);
      // RNRestart.Restart();
    // }

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

  clear_to_home(){

    try {
      AsyncStorage.multiRemove(['@requestcode', '@ridercode', '@rider_name', '@rider_phone', '@rider_loc_log', '@rider_loc_lat', '@pickup_loc_log', '@pickup_loc_lat', '@dropoff_loc_log', '@dropoff_loc_lat', '@rider_onesignalplayerid'])
      .then(res => {
          //do something else
      });       
    } catch (error) {
        console.log('AsyncStorage set data error in List component', error.message)
    }

    try {
      AsyncStorage.multiSet([
      ['@clientstatus', ''],
      ['@mapdetails_show', 'false']
      ]).then((value) => {
        console.log("Store_acceptrequest data stored successfully");
        RNRestart.Restart();
      })
      .then(res => {
          //do something else
      });       
    } catch (error) {
        console.log('AsyncStorage set data error in List component', error.message)
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
      requestor_onesignal: this.state.requestor_onesignal,
    }

    this.setState({
      nexttxt: "Next"
    });

    // console.log(data);     

    apicalls.postdata(data).then(data => {
      console.log(data);     
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

  componentDidMount() {
    //Geolocation.setRNConfiguration({ authorizationLevel: 'whenInUse', skipPermissionRequests: false, });
    this.getCurrentLocation();

    //this.firebase_realtime_tracking();
  }

  //Firebase funcion to track rider location - wrap arround a timer function to check for location of rider
  firebase_realtime_tracking(){
    const user_id = "1"
    const userData = [];
    firestore().collection("roam_rides").onSnapshot((snapshot) => {
      snapshot.forEach((doc) =>{ 
        //userData.push({ ...doc.data(), id: doc.id });
        console.log( doc.id,  " => ",doc.data());
        if(doc.data().user_id == user_id){
            // Subscribe to rider location changes here - doc.data().latitude, doc.data().longitude and store in state for use in your views

        }
      });
    });

    /*firestore().collection("roam_rides").where('rider_id', '==', "7") .limit(1).get()
    .then((snapshot) => {
      console.log( snapshot._docs[0]._data);
    })*/
    console.log("UserData " + userData);
  }

  getCurrentLocation() {
    Geolocation.getCurrentPosition((info) => {
      console.log(info);
      this.setState({
        coords: info.coords,
      });
    },error=>{console.log(error)},
    {
      enableHighAccuracy: true,
      timeout: 2000,
    });
    //console.log(this.state)
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

    const loadUI  = () => {

      if (this.state.clientstatus == "acceptedrequest") {
        return (
          <View style={[styles.messcontainer]}>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#000', alignItems: 'center', height: 100}}>
           
                <View style={{alignSelf: 'flex-start', flex: 3, marginBottom: 0, marginLeft: 15, width: 300 }}>
                  <Image
                      // style={{width: 15, height: 15}}
                      source={require('../../images/roamprofile.png')}
                      style={{ width: '20%',
                      marginTop: 10,
                      marginBottom: 0,
                      marginLeft: 120,
                      borderRadius: 35,
                      height: undefined,
                      aspectRatio: 1}}
                  />
                </View>

                <View style={[styles.txtconatiner,{flex: 1, flexDirection: 'column'}]}>
                  <Text style={styles.subheading,[{marginBottom: 0, color: '#fff'}]}><Icon size={17} name='id-card' /> Rider's Details</Text>
                </View>

                <View style={[styles.inputcontainer,{flex: 2}]}>
                  <View style={styles.firsttextinput}>
                      <Text style={styles.txt_head}>Name: </Text>
                      <Text style={styles.txt}>{this.state.rider_name} </Text>
                  </View>
                  <View style={styles.firsttextinput}>
                      <Text style={styles.txt_head}>Phone: </Text>
                      <Text style={styles.txt, [{fontSize: 13, color: '#fff'}]}>{this.state.rider_phone} </Text>
                  </View>
                </View>

                <View style={[styles.inputcontainer,{flex: 3}]}>
                  <View style={styles.firsttextinput}>
                      <Text style={styles.txt_head}>Bike Plate: </Text>
                      <Text style={styles.txt}>GT 213 20 </Text>
                  </View>
                  <View style={styles.firsttextinput}>
                      <Text style={styles.txt_head}>Bike Description: </Text>
                      <Text style={styles.txt}>Black and Red Bike </Text>
                  </View>
                </View>
                <View style={[styles.inputcontainer,{flex: 3}]}>
                  
                </View>

            </View>
          </View>
        );
      }else if (this.state.clientstatus == "tripstart") {
        return (
          <View style={[styles.messcontainer]}>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#000', alignItems: 'center', height: 100}}>
           
                <View style={{alignSelf: 'flex-start', flex: 3, marginBottom: 0, marginLeft: 15, width: 300 }}>
                  <Image
                      // style={{width: 15, height: 15}}
                      source={require('../../images/roamprofile.png')}
                      style={{ width: '20%',
                      marginTop: 10,
                      marginBottom: 0,
                      marginLeft: 120,
                      borderRadius: 35,
                      height: undefined,
                      aspectRatio: 1}}
                  />
                </View>

                <View style={[styles.txtconatiner,{flex: 1, flexDirection: 'column'}]}>
                  <Text style={styles.subheading,[{marginBottom: 0, color: '#fff'}]}><Icon size={17} name='id-card' /> Rider's Details</Text>
                </View>

                <View style={[styles.inputcontainer,{flex: 2}]}>
                  <View style={styles.firsttextinput}>
                      <Text style={[styles.txt_head,{color: '#ffbe00'}]}><Icon size={17} name='info-circle' style={{color: '#5686e3'}} /> {this.state.rider_name} has the package and has started the trip.</Text>
                  </View>
                </View>

                <View style={[styles.inputcontainer,{flex: 2}]}>
                  <View style={styles.firsttextinput}>
                      <Text style={styles.txt_head}>Name: </Text>
                      <Text style={styles.txt}>{this.state.rider_name} </Text>
                  </View>
                  <View style={styles.firsttextinput}>
                      <Text style={styles.txt_head}>Phone: </Text>
                      <Text style={styles.txt, [{fontSize: 13, color: '#fff'}]}>{this.state.rider_phone} </Text>
                  </View>
                </View>

                <View style={[styles.inputcontainer,{flex: 3}]}>
                  <View style={styles.firsttextinput}>
                      <Text style={styles.txt_head}>Bike Plate: </Text>
                      <Text style={styles.txt}>GT 213 20 </Text>
                  </View>
                  <View style={styles.firsttextinput}>
                      <Text style={styles.txt_head}>Bike Description: </Text>
                      <Text style={styles.txt}>Black and Red Bike </Text>
                  </View>
                </View>
                <View style={[styles.inputcontainer,{flex: 1}]}>
                  
                </View>

            </View>
          </View>
        );
      }else if (this.state.clientstatus == "tripatdropoff") {
          return (
            <View style={[styles.messcontainer]}>
              <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#000', alignItems: 'center', height: 100}}>
             
                  <View style={{alignSelf: 'flex-start', flex: 3, marginBottom: 0, marginLeft: 15, width: 300 }}>
                    <Image
                        // style={{width: 15, height: 15}}
                        source={require('../../images/roamprofile.png')}
                        style={{ width: '20%',
                        marginTop: 10,
                        marginBottom: 0,
                        marginLeft: 120,
                        borderRadius: 35,
                        height: undefined,
                        aspectRatio: 1}}
                    />
                  </View>
  
                  <View style={[styles.txtconatiner,{flex: 1, flexDirection: 'column'}]}>
                    <Text style={styles.subheading,[{marginBottom: 0, color: '#fff'}]}><Icon size={17} name='id-card' /> Rider's Details</Text>
                  </View>
  
                  <View style={[styles.inputcontainer,{flex: 2}]}>
                    <View style={styles.firsttextinput}>
                        <Text style={[styles.txt_head,{color: '#ffbe00'}]}><Icon size={17} name='info-circle' style={{color: '#5686e3'}} /> {this.state.rider_name} is at the dropoff location.</Text>
                        <Text style={[styles.txt_head,{color: '#ffbe00'}]}><Icon size={17} name='info-circle' style={{color: '#5686e3'}} />The verification code is {this.state.request_verification_code}</Text>
                    </View>
                  </View>

                  <View style={[styles.inputcontainer,{flex: 2}]}>
                    <View style={styles.firsttextinput}>
                        <Text style={styles.txt_head}>Name: </Text>
                        <Text style={styles.txt}>{this.state.rider_name} </Text>
                    </View>
                    <View style={styles.firsttextinput}>
                        <Text style={styles.txt_head}>Phone: </Text>
                        <Text style={styles.txt, [{fontSize: 13, color: '#fff'}]}>{this.state.rider_phone} </Text>
                    </View>
                  </View>
  
                  <View style={[styles.inputcontainer,{flex: 3}]}>
                    <View style={styles.firsttextinput}>
                        <Text style={styles.txt_head}>Bike Plate: </Text>
                        <Text style={styles.txt}>GT 213 20 </Text>
                    </View>
                    <View style={styles.firsttextinput}>
                        <Text style={styles.txt_head}>Bike Description: </Text>
                        <Text style={styles.txt}>Black and Red Bike </Text>
                    </View>
                  </View>
                  <View style={[styles.inputcontainer,{flex: 1}]}>
                    
                  </View>
  
              </View>
            </View>
          );
        }else if (this.state.clientstatus == "tripcompleted") {
          return (
            <View style={[styles.messcontainer]}>
              <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#000', alignItems: 'center', height: 100}}>
             
                  <View style={{alignSelf: 'flex-start', flex: 3, marginBottom: 0, marginLeft: 15, width: 300 }}>
                    <Image
                        // style={{width: 15, height: 15}}
                        source={require('../../images/roamprofile.png')}
                        style={{ width: '20%',
                        marginTop: 10,
                        marginBottom: 0,
                        marginLeft: 120,
                        borderRadius: 35,
                        height: undefined,
                        aspectRatio: 1}}
                    />
                  </View>
  
                  <View style={[styles.txtconatiner,{flex: 1, flexDirection: 'column'}]}>
                    <Text style={styles.subheading,[{marginBottom: 0, color: '#fff'}]}><Icon size={17} name='id-card' /> Rider's Details</Text>
                  </View>
  
                  <View style={[styles.inputcontainer,{flex: 2}]}>
                    <View style={styles.firsttextinput}>
                        <Text style={styles.txt_head}><Icon size={17} name='info-circle' style={{color: '#fff'}} /> {this.state.rider_name} has completed the Delivery.</Text>
                    </View>
                  </View>
  
                  <View style={[styles.inputcontainer,{flex: 1}]}>
                  <TouchableOpacity
                        style={{
                          alignSelf: 'flex-end'
                        }}
                        onPress={() => this.clear_to_home()}
                        >
                        <Text style={styles.nexttxt}>Continue <Icon style={{color: '#ffffff', alignSelf: 'flex-end',}} size={17} name='arrow-right' /></Text>
                        
                      </TouchableOpacity>
                  </View>

                  <View style={[styles.inputcontainer,{flex: 5}]}>
                    
                  </View>
  
              </View>
            </View>
          );
        }else if (this.state.clientstatus == "tripcancel") {
          return (
            <View style={[styles.messcontainer]}>
              <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#000', alignItems: 'center', height: 100}}>
             
                  <View style={{alignSelf: 'flex-start', flex: 3, marginBottom: 0, marginLeft: 15, width: 300 }}>
                    <Image
                        // style={{width: 15, height: 15}}
                        source={require('../../images/roamprofile.png')}
                        style={{ width: '20%',
                        marginTop: 10,
                        marginBottom: 0,
                        marginLeft: 120,
                        borderRadius: 35,
                        height: undefined,
                        aspectRatio: 1}}
                    />
                  </View>
  
                  <View style={[styles.txtconatiner,{flex: 1, flexDirection: 'column'}]}>
                    <Text style={styles.subheading,[{marginBottom: 0, color: '#fff'}]}><Icon size={17} name='id-card' /> Request Details</Text>
                  </View>
  
                  <View style={[styles.inputcontainer,{flex: 2}]}>
                    <View style={styles.firsttextinput}>
                        <Text style={styles.txt_head}> {this.state.rider_name} has cancelled the request </Text>
                    </View>
                  </View>
  
                  <View style={[styles.inputcontainer,{flex: 3}]}>
                    <View style={styles.firsttextinput}>
                      <TouchableOpacity
                        style={{
                          alignSelf: 'flex-end'
                        }}
                        onPress={() => this.post_request()}
                        >
                        <Text style={styles.nexttxt}>Get new rider</Text>
                        <Icon style={{color: '#ffffff', alignSelf: 'flex-end',}} size={17} name='arrow-right' />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.inputcontainer,{flex: 3}]}>
                    
                  </View>
  
              </View>
            </View>
          );
      }else{
        return (
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
        );
      }
  
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
          <ScrollView keyboardShouldPersistTaps="handled">
        
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
              {this.state.coords != null ? (
                <MapView
                  style={{
                    flex: 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  customMapStyle={mapStyle}
                  zoomEnabled={true}
                  showsUserLocation={true}
                  initialRegion={{
                    latitude: this.state.coords.latitude,
                    longitude: this.state.coords.longitude,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                  }}
                  ref={(c) => (this.mainMapView = c)}
                  >


                    {this.state.mapdetails_show == 'true' ? (

                      <MapViewDirections
                        origin={{latitude: this.state.pickup_loc_log, longitude: this.state.pickup_loc_lat}}
                        destination={{latitude: this.state.dropoff_loc_log, longitude: this.state.dropoff_loc_lat}}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor="#ffbe00"
                      />

                    ) : null}

                    {this.state.mapdetails_show == 'true' ? (
                      <Marker
                        coordinate={{
                          latitude: this.state.dropoff_loc_log,
                          longitude: this.state.dropoff_loc_lat,
                        }}
                        title={'Dunga Avalanche'}
                        description={'This rider is around your current location'}>
                          <Image
                            // style={{width: 65, height: 25}}
                            source={require('../../images/marker.png')}
                          />
                      
                      </Marker>
                    ) : null}

                    {this.state.mapdetails_show == 'true' ? (
                      <Marker
                        coordinate={{
                          latitude: this.state.rider_loc_log,
                          longitude: this.state.rider_loc_lat,
                        }}
                        title={'Dunga Avalanche'}
                        description={'This rider is around your current location'}>
                          <Image
                            // style={{width: 65, height: 25}}
                            source={require('../../images/motorrider.png')}
                          />
                      </Marker>
                    ) : null}

                    {this.state.mapdetails_show == 'true' ? (
                      <Marker
                        coordinate={{
                          latitude: this.state.pickup_loc_log,
                          longitude: this.state.pickup_loc_lat,
                        }}
                        title={'Vondee Sela'}
                        description={'This rider is around your current location'}>
                        <Image
                          style={{width: 35}}
                          source={require('../../images/box.png')}
                        />
                      </Marker>
                    ) : null}
                    

                  {/* <Marker
                    coordinate={{
                      latitude: this.state.coords.latitude,
                      longitude: this.state.coords.longitude,
                    }}
                    title={'You are here.'}
                    description={'This is your current location'}/> */}


                </MapView>
              ) : null}

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

                <View style={styles.currentLocationbuttoncontainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.getCurrentLocation();
                      if(this.mainMapView != null){
                        this.mainMapView.fitToCoordinates(
                          [{latitude: this.state.coords.latitude, longitude:this.state.coords.longitude},
                            {latitude: this.state.coords.latitude + 0.003, longitude:this.state.coords.longitude + 0.001},
                            {latitude: this.state.coords.latitude - 0.003, longitude:this.state.coords.longitude - 0.001}],
                          {
                            edgePadding: {
                              right: width / 20,
                              bottom: height / 20,
                              left: width / 20,
                              top: height / 20,
                            },
                          },
                        );
                      }
                    }}>
                    <View style={styles.locationcontainer}>
                      <Icon
                        style={{color: '#ffffff', marginLeft: 9, marginBottom: 0}}
                        size={30}
                        name="map-marker"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
            
                {loadUI()}

            </View>
          </ScrollView>
        </View>

        <Modal
          keyboardShouldPersistTaps="always"
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

            <View style={styles.sliderbox} keyboardShouldPersistTaps="handled">
              <Swiper
                  index={1}
                  // ref='swiper' 
                  ref={ this.swiperRef }
                  index={0}
                  showsButtons={false} 
                  loop={false} 
                  showsPagination={false}
                  keyboardShouldPersistTaps="handled">

                    <View style={styles.slide1} keyboardShouldPersistTaps="handled">
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      marginTop: 10,
                      marginLeft: 15,
                    }}>
                    <Text style={styles.txt}>
                      What's the{' '}
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 22,
                          color: '#ffbe00',
                        }}>
                        pick-up
                      </Text>{' '}
                      location?{' '}
                    </Text>
                  </View>
                  <View
                    style={styles.searchbox}
                    keyboardShouldPersistTaps="handled">
                    <View
                      style={styles.modalsearchcontainer}
                      keyboardShouldPersistTaps="handled">
                      <GooglePlacesAutocomplete
                        placeholder="Pickup location"
                        enablePoweredByContainer={false}
                        styles={{
                          textInputContainer: {
                            backgroundColor: '#121111',
                            fontSize: 15,
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            height: 50,
                          },
                          textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            borderBottomWidth: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16,
                          },
                          predefinedPlacesDescription: {
                            color: '#fff',
                          },
                          description: {
                            color: '#fff',
                          },
                        }}
                        onPress={(data, details = null) => {
                          console.log(data, details.place_id);
                          Geocoder.from(data.description)
                            .then((json) => {
                              var location = json.results[0].geometry.location;
                              this.setState({
                                pickup_location: json.results[0].formatted_address,
                                pickup_lat: location.lat,
                                pickup_long: location.lng,
                                origin: {
                                  place_id: `place_id:${details.place_id}`,
                                  description: data.description,
                                  coords: location,
                                },
                              });
                              console.log(location);
                            })
                            .catch((error) => console.warn(error));
                        }}
                        query={{
                          key: GOOGLE_MAPS_APIKEY,
                          language: 'en',
                        }}
                        GooglePlacesDetailsQuery={{fields: 'geometry'}}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      alignSelf: 'flex-start',
                      marginTop: 10,
                      marginLeft: 15,
                    }}>
                    <Text style={styles.txt}>
                      What's the{' '}
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 22,
                          color: '#ffbe00',
                        }}>
                        drop-off
                      </Text>{' '}
                      location?
                    </Text>
                  </View>
                  <View
                    style={styles.searchbox}
                    keyboardShouldPersistTaps="handled">
                    <View
                      style={styles.modalsearchcontainer}
                      keyboardShouldPersistTaps="handled">
                      <GooglePlacesAutocomplete
                        placeholder="Drop location"
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
                          description: {
                            color: '#fff',
                          },
                        }}
                        onPress={(data, details = null) => {
                          console.log(data, details);
                          Geocoder.from(data.description)
                            .then((json) => {
                              var location = json.results[0].geometry.location;
                              this.setState({
                                dropoff_location: json.results[0].formatted_address,
                                dropoff_lat: location.lat,
                                dropoff_long: location.lng,
                                destination: {
                                  place_id: `place_id:${details.place_id}`,
                                  description: data.description,
                                  coords: location,
                                },
                              });
                              console.log(location);
                            })
                            .catch((error) => console.warn(error));
                        }}
                        query={{
                          key: GOOGLE_MAPS_APIKEY,
                          language: 'en',
                        }}
                        GooglePlacesDetailsQuery={{fields: 'geometry'}}
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
                              placeholder="Select the type of package"
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

                  </View>

                

                <View style={styles.slide5}>
                  <View style={{alignSelf: 'flex-start', width: 400}}>
                    <View style={{height: 300}}>
                      { map = this.state.origin != null &&
                      this.state.destination != null ? (
                        <MapView
                          style={{
                            flex: 1,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                          }}
                          customMapStyle={mapStyle}
                          initialRegion={{
                            latitude: this.state.origin.coords.lat,
                            longitude: this.state.origin.coords.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                          }}
                          ref={(c) => (this.mapView = c)}>
                          <Marker
                            coordinate={{
                              latitude: this.state.origin.coords.lat,
                              longitude: this.state.origin.coords.lng,
                            }}
                            title={'Pickup Location'}
                            description={'Pickup point'}></Marker>
                          <Marker
                            coordinate={{
                              latitude: this.state.destination.coords.lat,
                              longitude: this.state.destination.coords.lng,
                            }}
                            title={'Drop Off'}
                            description={'Drop off point'}></Marker>
                          <MapViewDirections
                            origin={this.state.origin.place_id}
                            destination={this.state.destination.place_id}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="hotpink"
                            onStart={(params) => {
                              console.log(
                                `Started routing between "${params.origin}" and "${params.destination}"`,
                              );
                            }}
                            onReady={(result) => {
                              console.log(`Distance: ${result.distance} km`);
                              console.log(`Duration: ${result.duration} min.`);

                              this.setState({
                                rideInfo: {
                                  distance: result.distance,
                                  duration: result.duration
                                }
                              });

                              this.mapView.fitToCoordinates(
                                result.coordinates,
                                {
                                  edgePadding: {
                                    right: width / 20,
                                    bottom: height / 20,
                                    left: width / 20,
                                    top: height / 20,
                                  },
                                },
                              );
                            }}
                            onError={(errorMessage) => {
                              // console.log('GOT AN ERROR');
                            }}
                          />
                        </MapView>
                      ) : null}
                    </View>
                  </View>

                  <View
                    style={{
                      alignSelf: 'flex-start',
                      marginBottom: 10,
                      marginLeft: 15,
                      width: 300,
                    }}>
                    <View style={styles.txtconatiner}>
                      <Image
                        // style={{width: 15, height: 15}}
                        source={require('../../images/deliverybike.png')}
                        style={{
                          width: '28%',
                          marginTop: 25,
                          marginLeft: 130,
                          height: undefined,
                          aspectRatio: 1,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: 300,
                        width: '100%',
                        marginBottom: 0,
                        marginTop: 0,
                        marginLeft: 15,
                      }}>
                      <View style={{marginTop: 10, width: '100%'}}>
                        {/* <Text style={styles.txt2}> */}
                        <Text style={{fontSize: 25, color: '#fff'}}>Roam</Text>
                        <Text
                          style={{
                            fontSize: 25,
                            color: '#fff',
                            alignSelf: 'flex-end',
                            fontWeight: 'bold',
                            color: '#ffbe00',
                            marginLeft: 0,
                          }}>
                          {' '}
                          GHS 10.00
                        </Text>
                        {this.state.rideInfo != null ? <Text
                          style={{
                            fontSize: 15,
                            color: '#fff',
                            alignSelf: 'flex-end',
                            fontWeight: 'bold',
                            color: '#ffbe00',
                            marginLeft: 0,
                          }}>
                          {' '}
                          {this.state.rideInfo.distance} km
                        </Text>: null}
                        {/* </Text> */}
                      </View>
                      <View style={{marginTop: 20}}>
                        <Text style={(styles.txt2, [{marginTop: 10}])}>
                          <Text style={{fontSize: 25, color: '#ffbe00'}}>
                            {this.state.time_now}
                          </Text>       
                        </Text>
                        {this.state.rideInfo != null ? 
                        <Text style={(styles.txt2, [{marginTop: 1}])}>
                          <Text style={{fontSize: 15, color: '#ffbe00'}}>
                            { this.state.rideInfo.duration < 60 ? `${this.state.rideInfo.duration.toFixed(2)} min` : `${(this.state.rideInfo.duration * (1/60)).toFixed(2)} hrs`} 
                          </Text>     
                        </Text>  : null}
                      </View>
                      <View style={{marginTop: 30}}>
                        <Text
                          style={{fontSize: 10, color: '#fff', marginTop: 35}}>
                          {' '}
                          Easy, Fast, Reliable delivery.
                        </Text>
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
      
      </Drawer>
    );
  }
}

export default Homescreen;
