import { Platform } from 'react-native'
export default {

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    arrowcontainer: {
        marginLeft: 16,
        marginTop: 40,
    },

    leftarrow: {
        width: 15,
        height: 15
    },

    txt: {
        fontSize: 20,
        fontFamily: 'lyftpro-bold'
    },

    txtconatiner: {
        marginTop: 20,
        marginHorizontal: 30,
    },

    numbercontainer: {
        alignItems: 'center',
        marginTop: 15,
        borderBottomColor: '#3333FF',
        borderBottomWidth: 1,
        marginHorizontal: 10,
    },

    textinputtxt: {
        fontSize: 20,
    },

    buttoncontainer: {
        marginHorizontal: 30,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },

    button: {
        backgroundColor: 'black'
    },

    Numberinput: {
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#A0A0A0'
    },

    numbercontainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 25
    },

    countrycode: {
        justifyContent: 'center',
        paddingBottom: 4,
        flex: 8,
    },

    inputcontainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 8
    },

    detcontainer:{
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10
    },

    firsttextinput: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },

    numbertxt: {
        color: 'black',
        fontSize: 20,
        paddingBottom: 7,
        paddingLeft: 10
    },

    footercontainer: {
        marginVertical: 25,
    },

    footertxt: {
        fontSize: 13,
        color: '#a537fd',
        textAlign: 'center'
    },

    backtxt: {
        fontSize: 20,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontWeight: 'bold',
    },

    nexttxt: {
        fontSize: 20,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontWeight: 'bold',
        color: '#008716',
    },

    pagetitle: {
        fontSize: 20,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontWeight: 'bold',
    },

    subheading: {
        fontSize: 15,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontWeight: 'bold',
        marginBottom: 20
    },

    txt_head: {
        fontSize: 13,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontWeight: 'bold',
    },

    txt: {
        fontSize: 13,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },

}