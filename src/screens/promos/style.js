import { Platform } from 'react-native'
export default {

    header: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    container: {
        flex: 1,
    },

    headerimagecontainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 16,
        marginTop: Platform.OS === 'ios' ? 32 : 38,
    },

    titlecontainer: {
        flex: 9,
        alignItems: 'flex-start',
        marginTop: Platform.OS === 'ios' ? 30 : 36,
    },

    titletxt: {
        fontSize: 15,
        fontFamily: 'lyftpro-bold',
        color: 'white'
    },

    bannercontainer: {
        alignItems: 'center',
        marginTop: 20
    },

    bannerline: { marginTop: 20 },

    bannerlinetxt: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontFamily:'proximanova-regular'
    },

    textinputcontainer: {
        marginHorizontal: 20,
        marginTop: 30,
        borderBottomColor: 'white',
        borderBottomWidth: 0.2,
        paddingBottom: 30
    },

    textinputview: {
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#771F75',
        padding: 14
    },

    textinputtxt: {
        fontSize: 20,
        color: 'white'
    },

    promoscardcontainer: {
        marginHorizontal: 20,
        marginTop: 30
    },

    cardinnercontainer: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#771F75',
        padding: 15,
        justifyContent: 'center'
    },

    icon1: {
        color: 'white',
        marginTop: 6,
        marginRight: 5
    },

    icon2: {
        color: 'white',
        marginTop: 5,
        marginRight: 5
    },

    cardtxt: {
        fontSize: 20,
        color: 'white'
    }
}