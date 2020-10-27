import { Platform } from 'react-native'
export default {

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    headercontainer: {
        marginTop: 35,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },

    headertxt: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },

    usernamecontainer: {
        marginVertical: 15,
        justifyContent: 'center'
    },

    username: {
        fontSize: 20,
        fontFamily: 'proximanova-medium',
        textAlign: 'center'
    },

    joindatecontainer: {
        marginHorizontal: 16,
        backgroundColor: '#F5F4FC',
        padding: 10,
    },

    datetxt: {
        fontSize: 15,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        textAlign: 'center',
    }
}