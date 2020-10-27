import { Platform } from 'react-native'
export default {

    header: {
        flexDirection: 'row',
        marginBottom: 10,
        borderBottomColor: '#A0A0A0',
        borderBottomWidth: 0.5,
        paddingBottom: 15
    },

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    headerimagecontainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 16,
        marginTop: Platform.OS === 'ios' ? 34 : 38,
    },

    titlecontainer: {
        flex: 7,
        alignItems: 'flex-start',
        marginTop: Platform.OS === 'ios' ? 30 : 35,
    },

    titletxt: {
        fontSize: 15,
        fontFamily: 'lyftpro-bold'
    },

    toprighttxt: {
        flex: 2,
        alignItems: 'flex-end',
        marginRight: 16,
        marginTop: Platform.OS === 'ios' ? 30 : 35,
    },

    Usercontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#A0A0A0'
    },

    userimagecontainer: {
        flex: 2,
        paddingBottom: 8,
        marginLeft: 16
    },

    userimage: {
        width: Platform.OS === 'ios' ? 60 : 65,
        height: Platform.OS === 'ios' ? 60 : 65,
        borderRadius: Platform.OS === 'ios' ? 30 : 130,
    },

    usernamecontainer: {
        flex: 8,
        justifyContent: 'center',
        marginLeft: 15,
        paddingBottom: 8
    },

    usernametxt: {
        fontSize: 15,
        fontFamily: 'proximanova-regular'
    },

    footertxt: {
        fontSize: 12,
        fontFamily: 'proximanova-regular',
        textAlign: 'center',
        color: '#A0A0A0',
        borderTopWidth: 0.5,
        borderTopColor: '#A0A0A0',
        paddingVertical: 15,
    },

    footer: {
        flex: 1,
        justifyContent: 'flex-end',
    }
}