import { Platform } from 'react-native'
export default {

    container: {
        marginHorizontal: 34,
        marginTop: 15
    },

    innercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    viewcontainer: { flexDirection: 'row' },

    iconcontainer: { justifyContent: 'center' },

    textcontainer: { justifyContent: 'center', marginLeft: 5 },

    txt: {
        fontSize: 12,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    }
}