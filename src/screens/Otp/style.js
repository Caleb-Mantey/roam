import {Platform} from 'react-native';
export default {
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  arrowcontainer: {
    marginLeft: 16,
    marginTop: 40,
  },

  leftarrow: {
    width: 15,
    height: 15,
  },

  txt: {
    fontSize: 20,
    fontFamily: 'lyftpro-bold',
    alignSelf: "center"
  },

  txtconatiner: {
    marginTop: 20,
    marginHorizontal: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '100%',
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#000',
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
};
