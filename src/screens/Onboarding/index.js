import React, {Component} from 'react';
import {
  Text, 
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
  ToastAndroid
} from 'react-native';

import {Drawer, Button, Textarea, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Onboarding from 'react-native-onboarding-swiper';
import {debug} from 'react-native-reanimated';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import DropDownPicker from 'react-native-dropdown-picker';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import IntlPhoneInput from 'react-native-intl-phone-input';
import apicalls from '../../provider/apicalls.js';
import AsyncStorage from '@react-native-community/async-storage';
// import Toast from 'react-native-toast-message';
 
import styles from './style';

export default class OnBoarding extends Component {

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
      nexttxt: 'Get Started',
      show_prev: false,
      paycash_check: false,
      phonenumber: null,
      firstname: null,
      lastname: null,
      networkprovider: null,
      momonumber: null,
      paybycash: null,
      otpcode: null,
    };
    
  
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

    this.get_stored_data();

  }


  async get_stored_data(){
    const jsonValue = await AsyncStorage.getItem('@loggedin');
    if(jsonValue == "true"){
      this.props.navigation.navigate('Homescreen');
    } 
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

   
  checkboxpress() {
    this.setState({
      paycash_check: !this.state.paycash_check,
    });
  }

  // Dropdown Start
  changeCountry(item) {
    let city = null;
    let cities;

    this.setState({networkprovider: item.value})

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

    if(this.my_pageindex == 0){
      this.setState({
        nexttxt: "Get Started"
      });
      this.setState({ show_prev: false });
    }else if(this.my_pageindex > 0 && this.my_pageindex < 3){
      this.setState({
        nexttxt: "Next"
      });
      this.setState({ show_prev: true });
    }else{
      this.setState({
        nexttxt: "Submit"
      });
      this.setState({ show_prev: true });
    }

    console.log(this.my_pageindex);

    if(this.my_pageindex == 2){
      this.otp_sendcode(); 
    }else if(this.my_pageindex == 3){
      this.otp_checkcode(this.state.otpcode);   
    }else if(this.my_pageindex >3){
      this.otp_register();  
    }

  }

  otp_sendcode(){
    var data = {
      actions: 'otpsms',
      phonenumber: this.state.phonenumber.dialCode + this.state.phonenumber.unmaskedPhoneNumber,
    }

    apicalls.postdata(data).then(data => {
      console.log(data)     
      if(data.msg != "error"){
          ToastAndroid.show("OTP will be sent shortly", ToastAndroid.SHORT);
      }
      
    })   

  }

  async otp_checkcode(code){

    var data = {
      actions: 'otpcheck',
      phonenumber: this.state.phonenumber.dialCode + this.state.phonenumber.unmaskedPhoneNumber,
      otpcode: code,
    }

    console.log(data)   

    apicalls.postdata(data).then(data => {
      console.log(data.data);     
      if(data.msg == "success"){

        ToastAndroid.show("Logging you in...", ToastAndroid.SHORT);

        console.log(data.data);
        
        this.store_data(data.data.USR_ACCESS_LEVEL, data.data.USR_APIKEY, data.data.USR_CODE, data.data.USR_FIRSTNAME, data.data.USR_MOMONETWORK, data.data.USR_MOMONUMBER, data.data.USR_OTHERNAME, data.data.USR_PASSWORD, data.data.USR_PAYBYCASH, data.data.USR_PHONE);

        this.props.navigation.navigate('Homescreen');

      }else{
        ToastAndroid.show(data.data, ToastAndroid.SHORT);
      }
      
    })
    
  }


  async store_data(accesslevel, apikey, code, firstname, momonetwork, momonumber, othername, password, paybycash, phone){

    // await AsyncStorage.setItem('@loggedin', 'true');
    // await AsyncStorage.setItem('@accesslevel', accesslevel);
    // await AsyncStorage.setItem('@apikey', apikey);
    // await AsyncStorage.setItem('@code', code);
    // await AsyncStorage.setItem('@firstname', firstname);
    // await AsyncStorage.setItem('@momonetwork', momonetwork);
    // await AsyncStorage.setItem('@momonumber', momonumber);
    // await AsyncStorage.setItem('@othername', othername);
    // await AsyncStorage.setItem('@password', password);
    // await AsyncStorage.setItem('@paybycash', paybycash);
    // await AsyncStorage.setItem('@phone', phone);

    try {
    
      await AsyncStorage.multiSet([
      ['@loggedin', 'true'],
      ['@accesslevel', accesslevel],
      ['@apikey', apikey],
      ['@code', code],
      ['@firstname', firstname],
      ['@momonetwork', momonetwork],
      ['@momonumber', momonumber],
      ['@othername', othername],
      ['@password', password],
      ['@paybycash', paybycash],
      ['@phone', phone]
      ]);

            
    } catch (error) {
        console.log('AsyncStorage set data error in List component', error.message)
    }

  }


  otp_register(){

    console.log("data register");   

    this.setState({
      nexttxt: "Next"
    });

    var data = {
      actions: 'registeruser',
      phonenumber: this.state.phonenumber.dialCode + this.state.phonenumber.unmaskedPhoneNumber,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      networkprovider: this.state.networkprovider,
      momonumber: this.state.momonumber.dialCode + this.state.momonumber.unmaskedPhoneNumber,
      paybycash: this.state.paycash_check
    }

    console.log(data)   

    apicalls.postdata(data).then(data => {
      console.log(data)     
      if(data.msg == "success"){
        this.my_pageindex = 0;
        console.log(this.my_pageindex);
        ToastAndroid.show("Logging you in...", ToastAndroid.SHORT);
        // this.props.navigation.navigate('Homescreen');
      }
      
    })      

  }


  my_previousslide(){
    this.refs.swiper.scrollBy(-1);
    this.my_pageindex = this.my_pageindex - 1;

    if(this.my_pageindex == 0){
      this.setState({
        nexttxt: "Get Started"
      });
      this.setState({ show_prev: false });
    }else if(this.my_pageindex > 0 && this.my_pageindex < 3){
      this.setState({
        nexttxt: "Next"
      });
      this.setState({ show_prev: true });
    }else{
      this.setState({
        nexttxt: "Submit"
      });
      this.setState({ show_prev: true });
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

  

  render() {
    
    return (


      <View style={styles.container}>

            <View style={styles.sliderbox}>
              
              <Swiper
                  index={1}
                  ref={ this.swiperRef }
                  index={0}
                  showsButtons={false} 
                  loop={false} 
                  showsPagination={false}
                >

                <View style={styles.slide1}>
                  
                  <View
                    style={{
                      flexDirection: 'column',
                    }}>
                      
                    <View style={styles.slideImg}>
                      <Image
                        source={require('../../images/roambg.png')}
                        style={{ 
                        width: '80%',
                        marginTop: 80,
                        marginLeft: 25,
                        height: undefined,
                        aspectRatio: 1}}
                      />  
                    </View>

                    <View style={{alignSelf: 'flex-start', marginTop: 340, marginLeft: 15}}>
                      <Text style={{fontWeight: "bold", fontSize: 22, color: '#ffbe00'}}>Welcome!</Text>
                      <Text style={{fontWeight: "bold", fontSize: 22, color: '#ffffff'}}>Easy. Fast. Reliable.</Text>
                      <Text style={styles.txt}>Make delivery request easily with Roam.</Text>
                    </View>

                  </View>

                </View>

                
                  
                <View style={styles.slide2}>
                  <View style={{alignSelf: 'flex-start', marginVertical: 50, marginLeft: 15, width: '90%'}}>
                    
                    <View style={styles.txtconatiner}>
                      {/* <Text style={{marginTop: 50, color: '#ffffff', fontSize: 20}}>What's your <Text style={{fontWeight: "bold",fontSize: 40, color: '#ffbe00'}}>number</Text>?</Text> */}
                      <Text style={{marginTop: 50, color: '#ffffff', fontSize: 20}}><Text style={{fontWeight: "bold",fontSize: 30, color: '#ffbe00'}}>Phone Number</Text></Text>
                    </View>

                    <View style={styles.numbercontainer}>
                      <View style={styles.countrycode}>
                        <IntlPhoneInput
                          onChangeText={(text) => this.setState({phonenumber: text})}
                          defaultCountry="GH"
                          dialCodeTextStyle={{fontSize: 20, color: '#ffffff'}}
                          phoneInputStyle={{fontSize: 20, width: '100%', color: '#ffffff'}}
                          containerStyle={{borderBottomWidth: 0.5, backgroundColor: '#121111', borderBottomColor: '#ffffff'}}
                        />
                      </View>
                    </View>

                  </View>
                </View>
                
                <View style={styles.slide3}>
                    <View style={{alignSelf: 'flex-start', marginVertical: 50, marginLeft: 15, width: '90%'}}>
                      <View style={styles.txtconatiner}>
                        <Text style={{marginTop: 50, color: '#ffffff', fontSize: 20}}>Enter the <Text style={{fontWeight: "bold",fontSize: 20, color: '#ffbe00'}}>code</Text> sent to your phone?</Text>
                        <OTPInputView
                          // onChangeText={(text) => this.setState({otpcode: text})}
                          style={{width: '80%', height: 200}}
                          pinCount={4}
                          codeInputFieldStyle={styles.underlineStyleBase}
                          codeInputHighlightStyle={styles.underlineStyleHighLighted}
                          onCodeFilled={(code) => {
                            console.log(`Code is ${code}, you are good to go!`);
                            this.setState({otpcode: code});
                            this.otp_checkcode(code);  
                          }}
                        />
                        <View style={{alignSelf: 'flex-end', flexDirection: 'column', marginRight: 50}}>
                          <TouchableOpacity
                            onPress={() => this.otp_sendcode()}
                          >
                            <Text style={{color: '#ffffff'}}><Icon size={17} name='refresh' /> Resend Code</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                  
                <View style={styles.slide2}>
                  <View style={{alignSelf: 'flex-start', marginTop: 50, marginLeft: 15, width: '90%'}}>
                    
                    <View style={styles.txtconatiner}>
                      {/* <Text style={{marginTop: 50, color: '#ffffff', fontSize: 20}}>What's your <Text style={{fontWeight: "bold",fontSize: 40, color: '#ffbe00'}}>full name</Text>?</Text> */}
                      <Text style={{marginTop: 50, color: '#ffffff', fontSize: 20}}><Text style={{fontWeight: "bold",fontSize: 20, color: '#ffbe00'}}>Fullname</Text></Text>
                    </View>

                    <View style={styles.inputcontainer}>
                      <View style={{justifyContent: 'center', width: 240}}>
                        <TextInput
                          onChangeText={(text) => this.setState({lastname: text})}
                          placeholder="Last Name"
                          placeholderTextColor="#A0A0A0"
                          style={{fontSize: 15, color: '#fff', borderBottomWidth: 0.5, borderBottomColor: '#ffffff'}}
                        />
                      </View>
                      <View style={{justifyContent: 'center', width: 240}}>
                        <TextInput
                          onChangeText={(text) => this.setState({firstname: text})}
                          placeholder="First Name"
                          placeholderTextColor="#A0A0A0"
                          style={{fontSize: 15, color: '#fff', borderBottomWidth: 0.5, borderBottomColor: '#ffffff'}}
                        />
                      </View>
                    </View>


                    <View style={styles.txtconatiner}>
                      {/* <Text style={{marginTop: 50, color: '#ffffff', fontSize: 20}}>What's your <Text style={{fontWeight: "bold",fontSize: 40, color: '#ffbe00'}}>full name</Text>?</Text> */}
                      <Text style={{marginTop: 50, color: '#ffffff', fontSize: 20}}><Text style={{fontWeight: "bold",fontSize: 20, color: '#ffbe00'}}>Select prefered Payment Method</Text></Text>
                    </View>

                    <View style={styles.inputcontainer}>
                      <View style={{alignSelf: 'flex-start', marginBottom: 0, marginLeft: 0, width: 300 }}>
                        {/* <View style={styles.txtconatiner}>
                          <Text style={{marginTop: 50, color: '#ffffff'}}>What's your <Text style={{fontWeight: "bold",fontSize: 20, color: '#ffbe00'}}>Mobile Money</Text> details?</Text>
                        </View> */}

                        <View style={styles.txtconatiner}>
                          <DropDownPicker
                              items={[
                                  {label: 'MTN Mobile Money', value: 'mobilemoney'},
                                  {label: 'Vodafon Cash', value: 'vodafoncash'},
                                  {label: 'AirtelTigo', value: 'airteltigo'}
                              ]}
                              defaultNull
                              placeholder="Select your service provider"
                              containerStyle={{height: 40, marginTop: 10}}
                              onChangeItem={item => this.changeCountry(item)}
                          />
                        </View>
                        
                        <View style={styles.numbercontainer}>
                          <View style={styles.countrycode}>
                            {/* <IntlPhoneInput
                              onChangeText={this.onChangeText}
                              defaultCountry="GH"
                              phoneInputStyle={{fontSize: 20, width: '100%'}}
                              containerStyle={{borderBottomWidth: 0.5}}
                            /> */}
                            
                            <IntlPhoneInput
                              onChangeText={this.onChangeText}
                              defaultCountry="GH"
                              dialCodeTextStyle={{fontSize: 20, color: '#ffffff'}}
                              phoneInputStyle={{fontSize: 20, width: '100%', color: '#ffffff'}}
                              containerStyle={{borderBottomWidth: 0.5, backgroundColor: '#121111', borderBottomColor: '#ffffff'}}
                              onChangeText={(text) => this.setState({momonumber: text})}
                            />
                            
                          </View>
                        </View>

                        <View style={styles.paycontainer}>
                          <Text style={styles.paytxt}>Or pay with</Text>
                        </View>

                        <View style={styles.buttoncontainer}>
                          <View style={[styles.button]}>
                            <TouchableOpacity style={{justifyContent: 'center'}}>
                              {/* <Image
                                source={require('../../images/handcash.png')}
                                style={{width: 80, height: 80, marginLeft: 40, justifyContent: 'center'}}
                              /> */}

                              
                              <Text style={styles.txt2}><CheckBox checked={this.state.paycash_check} onPress={() => this.checkboxpress()} color='#fff'/> Pay Rider by Cash</Text>
                            </TouchableOpacity>
                          </View>
                        </View>

                      </View>
                    </View>

                  </View>
                </View>
                

                 
              </Swiper>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>


                

                
                <View
                  style={{alignSelf: 'flex-start',flex: 5}}>
                  <TouchableOpacity 
                    style={{
                      alignSelf: 'flex-start',
                      marginLeft: 30,
                    }}
                    onPress={() => this.my_previousslide()}
                    >
                    { this.state.show_prev ? <Text style={styles.titletxt}><Icon style={{color: '#ffffff'}} size={17} name='arrow-left' /> Back</Text> : null }
                    
                    
                  </TouchableOpacity>
                </View>

                <View 
                  style={{alignItems: 'flex-end',flex: 7}}>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      marginRight: 30,
                      backgroundColor: '#ffbe00',
                      paddingHorizontal: 10,
                      paddingVertical: 7,
                      borderRadius: 10,
                    }}
                    onPress={() => this.my_nextslide()}
                    >
                    <Text style={styles.nexttxt}>{this.state.nexttxt} <Icon style={{color: '#ffffff', alignSelf: 'flex-end',}} size={17} name='arrow-right' /></Text>
                    
                  </TouchableOpacity>
                </View>

            </View>

      </View>


      // <Onboarding
      //   bottomBarHighlight={false}
      //   onDone={() => {
      //     this.props.navigation.navigate('Homescreen');
      //   }}
      //   onSkip={() => {
      //     this.props.navigation.navigate('Homescreen');
      //   }}
      //   pages={[
      //     {
      //       backgroundColor: '#121111',
      //       image: (
      //         <Image source={require('../../images/hello.png')}
      //           style={{ width: '100%',
      //           height: undefined,
      //           aspectRatio: 1}}
      //         />
      //       ),
      //       title: 'Hello!',
      //       subtitle: "I'm Mike, Glad to have you on Roam.",
      //     },
      //     {
      //       backgroundColor: '#121111',
      //       image: 
      //         <Image source={require('../../images/deliverymotor.png')} 
      //           style={{ width: '100%',
      //           height: undefined,
      //           aspectRatio: 1}}
      //         />,
      //       title: 'Make Request',
      //       subtitle:
      //         'Make a request for delivery to be made.',
      //     },
      //     {
      //       backgroundColor: '#121111',
      //       image: (
      //         <Image source={require('../../images/speed.png')} 
      //           style={{ width: '100%',
      //           height: undefined,
      //           aspectRatio: 1}}
      //         />
      //       ),
      //       title: 'Fast & Secured',
      //       subtitle:
      //         'We get you a delivery guy close by. Get the package in no time.',
      //     },
      //   ]}
      // />


    );
  }
}
