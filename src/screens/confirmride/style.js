import { Dimensions } from "react-native";
var width = Dimensions.get("window").width; //full width
import { Platform } from 'react-native'
export default {

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    searchBox: {
        top: 0,
        position: "absolute",
        width: width
    },

    searchcontainer: {
        marginHorizontal: 16,
        marginTop: 70
    },

    searchview: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#A0A0A0',
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: 'white'
    },

    location: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    locationcontainer: { marginLeft: 15 },

    locationtxt: {
        fontSize: 15,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        color: '#a537fd'
    },

    editiconcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    searchbottom: {
        paddingVertical: 5,
        backgroundColor: '#736598',
        borderWidth: 0.5,
        borderTopWidth: 0,
        borderColor: '#A0A0A0',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    searchbottomtxt: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    },

    menubuttoncontainer: {
        position: 'absolute',
        bottom: 0,
        marginHorizontal: 16,
        marginBottom: 16,
    },

    menucontainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
    },

    buttoncontainer: {
        marginHorizontal: 60,
        justifyContent: 'flex-end',
        marginVertical: 20,
        backgroundColor: '#a537fd',
        borderRadius: 80,
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
        paddingVertical: 15,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },
}