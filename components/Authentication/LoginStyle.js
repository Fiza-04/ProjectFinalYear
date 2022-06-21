import { StyleSheet } from "react-native";
import { winHeight, winWidth } from "./Dimensions";



export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        position: 'relative',
        paddingTop: winHeight/ 4.5,
        paddingStart: winWidth/ 3,
        paddingBottom: winHeight / 4,
        paddingEnd: winWidth/ 3,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    subContainer:{
        borderWidth: 0.5,
        borderRadius: 25,
        borderColor: 'white',
        height: winHeight / 2,
        width: winWidth / 3,
        alignItems: 'center'
        
    },
    loginPart: {
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
        padding: winWidth/50,
        fontWeight: 10
    },
    inputPart: {
        alignSelf: 'center',
        width: winWidth / 5,
        paddingBottom: 10, 
        paddingTop: 20
    },
    inputs: {
        color: 'white',
        borderColor: 'white',
        borderWidth: 0.2,
        padding: 5,
        borderRadius: 10
    },
    navPart:{
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        padding: 10
    }

})