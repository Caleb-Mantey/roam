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
        flex: 9,
        alignItems: 'flex-start',
        marginTop: Platform.OS === 'ios' ? 30 : 36,
    },

    titletxt: {
        fontSize: 15,
        fontFamily: 'lyftpro-bold',
    },
}