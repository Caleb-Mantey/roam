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
        marginTop: Platform.OS === 'ios' ? 32 : 38,
    },

    titlecontainer: {
        flex: 7,
        alignItems: 'flex-start',
        marginTop: Platform.OS === 'ios' ? 30 : 37,
    },

    toprighttxt: {
        flex: 2,
        alignItems: 'flex-end',
        marginRight: 16,
        marginTop: Platform.OS === 'ios' ? 30 : 37,
    },

    titletxt: {
        fontSize: 16,
        fontFamily: 'proximanova-bold'
    },

    codetxt: {
        fontSize: 16,
        fontFamily: 'proximanova-regular',
    },

    codecontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#A0A0A0',
        borderBottomWidth: 0.5,
        paddingBottom: 12
    },

    footercontainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    footerinnercontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5F4FA'
    },

    messagetxt: { 
        textAlign: 'center', 
        fontSize: 15, 
        fontFamily:'proximanova-regular'
    },

    buttoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#A0A0A0',
        marginHorizontal: 140,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        backgroundColor: 'white'
    },

    btntxt: {
        fontSize: 15,
        fontFamily: 'lyftpro-light'
    },

}