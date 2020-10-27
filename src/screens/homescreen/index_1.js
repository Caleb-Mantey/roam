import React, {Component} from 'react';
import { useRef, useState } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert
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
    
    this.state = {
      modalVisible: false,
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
        nexttxt: "Submit"
      });
    }

    if(this.my_pageindex > 1){
      this.my_pageindex = 0;
      console.log(this.my_pageindex);
      this.showAlert();
    }

  }

  post_request(){
    
    var data = {
      actions: 'getRequest',
    }

    this.setState({
      nexttxt: "Next"
    });

    // apicalls.postdata(data).then(data => {
    //   console.log(data.msg)     
    //   if(data.msg == "success"){
        this.setState({modalVisible: false});
        this.hideAlert();
        this.props.navigation.navigate('PackageType');
    //   }
      
    // })      

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
        nexttxt: "Submit"
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
            
              <View style={styles.messagecontainer}>
                <Text style={styles.txt1}>Hey!</Text>
                <Text style={styles.txt2}>What's the <Text style={{fontWeight: "bold",fontSize: 25, color: '#ffbe00'}}>pick-up</Text> location?</Text>
              </View>

              <View style={styles.menubuttoncontainer}>
                <TouchableOpacity onPress={() => this.openDrawer()}>
                  <View style={styles.menucontainer}>
                    {/* <Image
                      source={require('../../images/menu.png')}
                      style={{width: 15, height: 15}}
                    /> */}
                    <Icon style={{color: '#ffffff'}} size={17} name='bars' />
                  </View>
                </TouchableOpacity>
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

              {/* <Image
                    // style={{width: 15, height: 15}}
                    source={require('../../images/b1c7b5d32a4eadebb405dbd6e85290fa.png')}
                    style={{ width: '100%',
                    marginTop: 40,
                    height: undefined,
                    aspectRatio: 1}}
                  /> */}

              <View style={{width: '91%', height: 460, marginHorizontal: 15, marginVertical: 15, }}>

                <MapView
                  style={{flex: 1}}
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
                  <View style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 15}}>
                    <Text style={styles.txt}>What's the  <Text style={{fontWeight: "bold", fontSize: 22, color: '#ffbe00'}}>pick-up</Text> location? </Text>
                  </View>
                  <View style={styles.searchbox}>
                      <View style={styles.modalsearchcontainer}>
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
                        />
                      </View>
                  </View>

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
                      />
                    </View>
                  </View>
                  
                  <View style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 15}}>
                    <Text style={styles.txt}>What <Text style={{fontWeight: "bold",fontSize: 20, color: '#ffbe00'}}>item</Text> are you moving?</Text>
                  </View>
                  
                  <View style={styles.txtconatiner, [{marginHorizontal: 16}]}>
                  {/* <PickerCheckBox
                    data={items}
                    headerComponent={<Text style={{fontSize:25}} >items</Text>}
                    OnConfirm={(pItems) => this.handleConfirm(pItems)}
                    ConfirmButtonTitle='OK'
                    DescriptionField='itemDescription'
                    KeyField='itemKey'
                    placeholder='select some items'
                    arrowColor='#FFD740'
                    arrowSize={10}
                    placeholderSelectedItems ='$count selected item(s)'
                    /> */}

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
                  
                  <View style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 15}}>
                    <Text style={styles.txt}><Text style={{fontWeight: "bold",fontSize: 20, color: '#ffbe00'}}>Quantity</Text> of Items?</Text>
                  </View>

                  <View style={{alignSelf: 'flex-start', marginVertical: 0, marginLeft: 15}}>
                    <View style={styles.inputcontainer}>
                      <TextInput
                        placeholder="eg. 3"
                        placeholderTextColor="#A0A0A0"
                        style={{backgroundColor: '#ffffff', height: 40, fontSize: 15, borderBottomWidth: 0.5, width: 300, paddingHorizontal:10, borderBottomWidth: 0, borderRadius: 5,}}
                      />
                    </View>
                  </View>

                  <View style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 15}}>
                    <Text style={styles.txt}><Text style={{fontWeight: "bold",fontSize: 20, color: '#ffbe00'}}>Note</Text></Text>
                  </View>

                  <View>
                    <Textarea rowSpan={5} style={{marginHorizontal: 16}} bordered placeholder="What do you want to tell...." />
                  </View>
                
                </View>

                <View style={styles.slide5}>
                    <View style={{alignSelf: 'flex-start', marginBottom: 30, marginLeft: 15, width: 300 }}>
                      <View style={styles.txtconatiner}>
                        <Text style={{marginTop: 50, color: '#ffffff'}}>What's your <Text style={{fontWeight: "bold",fontSize: 20, color: '#ffbe00'}}>Mobile Money</Text> details?</Text>
                      </View>

                      <View style={styles.txtconatiner}>
                        <DropDownPicker
                            items={[
                                {label: 'MTN Mobile Money', value: 'mobilemoney'},
                                {label: 'Vodafon Cash', value: 'vodafoncash'},
                                {label: 'AirtelTigo', value: 'airteltigo'}
                            ]}
                            defaultNull
                            placeholder="Select your service provider"
                            containerStyle={{height: 40}}
                            onChangeItem={item => this.changeCountry(item)}
                        />
                      </View>
                      
                      <View style={styles.numbercontainer}>
                        <View style={styles.countrycode}>
                          
                          <IntlPhoneInput
                            onChangeText={this.onChangeText}
                            defaultCountry="GH"
                            dialCodeTextStyle={{fontSize: 20, color: '#ffffff'}}
                            phoneInputStyle={{fontSize: 20, width: '100%', color: '#ffffff'}}
                            containerStyle={{borderBottomWidth: 0.5, backgroundColor: '#121111', borderBottomColor: '#ffffff'}}
                          />
                          
                        </View>
                      </View>

                      <View style={styles.paycontainer}>
                        <Text style={styles.paytxt}>Or pay with</Text>
                      </View>

                      <View style={styles.buttoncontainer}>
                        <View style={[styles.button]}>
                          <TouchableOpacity style={{justifyContent: 'center'}}>
                            <Text style={styles.txt2}><CheckBox checked={this.state.paycash_check} onPress={() => this.checkboxpress()} color='#fff'/> Pay Rider by Cash</Text>
                          </TouchableOpacity>
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
