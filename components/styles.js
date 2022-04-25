import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'ghostwhite',
        ...Platform.select({
            ios: { paddingTop: 32},
            android: {paddingTop: StatusBar.currentHeight}
        })
    },

    box: {
        width:80,
        height:80,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'stretch',
        borderWidth: 1,
        backgroundColor: 'lightgray',
        margin: 10,
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },

    row: {
        flex: 1,
        //alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
    },

    column: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
    },

});