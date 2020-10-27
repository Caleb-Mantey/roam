import {Platform} from 'react-native';
export default {
  header: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomColor: '#A0A0A0',
    borderBottomWidth: 0.5,
    paddingBottom: 15,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerimagecontainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 16,
    marginTop: Platform.OS === 'ios' ? 32 : 38,
  },

  titlecontainer: {
    flex: 7,
    alignItems: 'flex-start',
    marginTop: Platform.OS === 'ios' ? 30 : 37,
  },

  titletxt: {
    fontSize: 15,
    fontFamily: 'proximanova-bold',
  },

  toprighttxt: {
    flex: 2,
    alignItems: 'flex-end',
    marginRight: 16,
    marginTop: Platform.OS === 'ios' ? 30 : 37,
  },

  textinputcontainer: {
    paddingBottom: 5,
    marginTop: 30,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  iconcontainer: {
    flex: 1,
    justifyContent: 'center',
  },

  firsttextinput: {
    flex: 8,
    justifyContent: 'center',
  },

  textinput1: {
    flex: 1,
    borderBottomColor: '#A0A0A0',
    borderBottomWidth: 0.5,
    marginRight: 15,
    paddingBottom: Platform.OS === 'ios' ? 5 : 0,
  },

  paycontainer: {
    marginVertical: 15,
  },

  paytxt: {
    fontSize: 24,
    fontFamily: 'proximanova-regular',
    textAlign: 'center',
  },

  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  button: {
    borderWidth: 0.5,
    borderColor: '#A0A0A0',
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  footercontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 15,
  },

  footerview: {flexDirection: 'row'},

  footertxt: {
    justifyContent: 'center',
    fontSize: 12,
    fontFamily: 'lyftpro-light',
    marginLeft: 3,
    fontStyle: 'italic',
  },
};
