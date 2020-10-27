import { Platform } from 'react-native'
export default {

    container: {
        marginHorizontal: 16,
        backgroundColor: 'white',
        marginTop: 15,
        marginBottom: 15,

    },

    boxcontainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderWidth: 0.1,
        borderColor: '#fff',
        padding: 10,
        height: 150,
        backgroundColor:"white",
        borderRadius:10,
        padding:5,
        elevation:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },

    justifycontainer: {
        justifyContent: 'center'
    },

    innercontainer: {
        flexDirection: 'row',
        margin: 5,
        marginRight: 10
    },

    subinnercontainer: {
        justifyContent: 'center',
        marginBottom: 4,
        marginLeft: 5
    },

    txt1: {
        fontSize: 10,
        marginTop: 5,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },

    txt: {
        fontSize: 15,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    }
}