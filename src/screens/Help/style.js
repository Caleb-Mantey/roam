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
    marginTop: Platform.OS === 'ios' ? 32 : 35,
  },

  titlecontainer: {
    flex: 9,
    alignItems: 'flex-start',
    marginTop: Platform.OS === 'ios' ? 30 : 35,
  },

  titletxt: {
    fontSize: 15,
    fontFamily: 'proximanova-bold',
  },

  headtitle: {
    marginTop: 20,
    marginHorizontal: 16,
  },

  headtitletxt: {
    fontSize: 20,
    fontFamily: 'proximanova-medium',
  },

  borderview: {
    borderBottomColor: '#A0A0A0',
    borderBottomWidth: 0.5,
  },

  optiontxt: {
    paddingVertical: 20,
    fontSize: 15,
    fontFamily: 'proximanova-regular',
  },

  border: {
    height: 7,
    backgroundColor: '#F5F5FF',
    marginVertical: 15,
  },

  gridcontainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },

  gridview: {
    marginVertical: 30,
    marginHorizontal: 5,
    flex: 5,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#A0A0A0',
  },

  gridifirstview: {
    backgroundColor: '#F5F5FF',
    height: 50,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  gridimage: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridimages: {
    position: 'absolute',
    width: 50,
    height: 50,
  },

  gridviewtext: {
    height: 100,
    justifyContent: 'center',
  },

  gridtxt: {
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 15,
    fontFamily: 'proximanova-regular',
  },
};
