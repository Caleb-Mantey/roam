import {Platform} from 'react-native';
import { color } from 'react-native-reanimated';
export default {
  container: {
    flex: 1,
    backgroundColor: '#121111',
  },

  // container: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  
  // map: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  // },

  mapContainer: {
    width: '100%',
    height: 800,
  },

  menubuttoncontainer: {
    position: 'absolute',
    marginTop: 35,
    marginLeft: 16,
  },

  menucontainer: {
    backgroundColor: '#121111',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 0,
    height: 40,
    width: 40,
  },

  messcontainer: {
    backgroundColor: '#121111',
    marginTop: 520,
    marginLeft: 16,
    marginRight: 16,
    height: 300,
    borderRadius: 5,
  },

  messagecontainer: {
    marginVertical: 30,
    marginLeft: 16,
    paddingHorizontal: 10,
  },
  
  txt: {
    color: '#ffffff',
  },

  txt1: {
    fontSize: 18,
    fontFamily: 'proximanova-regular',
    color: '#ffffff'
  },

  txt2: {
    fontSize: 20,
    fontFamily: 'lyftpro-semibold',
    color: '#ffffff'
  },

  txt3: {
    fontSize: 12,
    fontFamily: 'lyftpro-semibold',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff'
  },

  searchcontainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    padding: 10,
    marginTop: 0,
    borderWidth: 0.5,
    borderColor: '#A0A0A0',
    borderRadius: 5,
  },

  searchicon: {
    justifyContent: 'center',
    marginRight: 10,
  },

  modalheader: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 15,
    borderBottomWidth: 0.2,
  },

  modalcontainer: {
    flex: 1,
    backgroundColor: '#121111',
  },

  modelcancel: {
    flex: 2,
    alignItems: 'flex-start',
    marginLeft: 16,
    marginTop: Platform.OS === 'ios' ? 36 : 30,
  },

  modalheadertitle: {
    flex: 7,
    alignItems: 'flex-start',
    marginTop: Platform.OS === 'ios' ? 30 : 22,
  },

  titletxt: {
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontWeight: 'bold',
    color: '#ffffff'
  },

  nexttxt: {
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontWeight: 'bold',
    color: '#ffffff',
  },

  donecontainer: {
    flex: 2,
    alignItems: 'flex-end',
    marginRight: 16,
    marginTop: Platform.OS === 'ios' ? 36 : 28,
  },

  donetxt: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontWeight: 'bold',
    color: '#ffffff',
  },

  searchbox: {
    height: 50,
    marginHorizontal: 0,
  },

  sliderbox: {
    height: 500,
    // marginHorizontal: 16,
    borderRadius: 1
  },

  modalsearchcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  position: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },

  startlocation: {
    flex: 8,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#A0A0A0',
    paddingVertical: 10,
  },

  endlocation: {
    flex: 6,
    justifyContent: 'center',
    paddingVertical: 30,
  },

  addbutton: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 5,
  },

  positiontxt: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },

  serachInputStyle: {
    description: {
      fontWeight: 'bold',
    },
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
    listView: {
      color: 'black', //To see where exactly the list is
      zIndex: 45, //To popover the component outwards
      position: 'absolute',
      marginTop: 40,
      backgroundColor: '#121111',
      borderWidth: 1,
    },
  },
  serachInputStyle2: {
    description: {
      fontWeight: 'bold',
    },
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
    listView: {
      color: 'black', //To see where exactly the list is
      zIndex: 16, //To popover the component outwards
      position: 'absolute',
      marginTop: 40,
      backgroundColor: '#121111',
      borderWidth: 1,
    },
  },

  wrapper: {},
  slide1: {
    
  },
  slide2: {
    
  },
  slide3: {
    
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },


  // Package Type CSS
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  textinputcontainer: {
    paddingBottom: 5,
    marginTop: 30,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  textinput1: {
    flex: 1,
    borderBottomColor: '#A0A0A0',
    borderBottomWidth: 0.5,
    marginRight: 35,
    paddingBottom: Platform.OS === 'ios' ? 5 : 0,
  },

  txt_margtop:{
    marginTop: 5,
  },


  // Payment Styles
  paycontainer: {
    marginVertical: 15,
  },

  paytxt: {
      fontSize: 12,
      fontFamily: 'proximanova-regular',
      textAlign: 'center',
      color: '#ffffff'
  },

  buttoncontainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
  },

  button: {
      borderWidth: 0,
      borderColor: '#A0A0A0',
      borderRadius: 3,
      paddingVertical: 5,
      paddingHorizontal: 20,
      justifyContent: 'center'
  },

  

  // Rider's Details
  
  inputcontainer: {
      flexDirection: 'row',
      marginHorizontal: 10,
      marginBottom: 8
  },

  
  firsttextinput: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center'
},
txt_head: {
  fontSize: 15,
  fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  fontWeight: 'bold',
  color: '#fff'
},

txt: {
  fontSize: 15,
  fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  color: '#fff'
},

txtconatiner: {
  marginTop: 0,
  marginHorizontal: 30,
  color: '#fff'
},

subheading: {
  fontSize: 15,
  fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  fontWeight: 'bold',
  // marginBottom: 20,
  color: '#fff'
},




};
