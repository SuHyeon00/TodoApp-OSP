import {StyleSheet, Dimensions} from 'react-native';
import {theme} from './theme';

export const viewStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 15,
    },

    divisionLine: {
        height: 5,
        backgroundColor: theme.Green,
        width: Dimensions.get('window').width-30,
    }
});

export const textStyles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: theme.main,
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 0,
    },
    schedule: {
        fontSize: 23,
        fontWeight: 'bold',
        color: theme.text,
        alignItems: 'flex-start',
        marginVertical: 3,
    },
    category: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.text,
        alignItems: 'flex-start',
        marginVertical: 3,
    },
    comment:{
        fontSize: 15,
        fontWeight: '300',
        color: theme.text,
        alignItems: 'flex-start',
        marginVertical: 10,
    },
    account:{
        fontSize: 50,
        fontWeight: 'bold',
        color: theme.main,
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 0,
    },
});

export const barStyles = StyleSheet.create({
    statusbar: {
        backgroundColor: theme.background,
    },
});

export const inputStyle = StyleSheet.create({
    textInput: {
        fontSize: 20,
        width: Dimensions.get('window').width-30,
        height: 40,
        marginLeft: 3,
        marginBottom: 10,
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: "#E5E5E5",
        color: theme.text,
    },

    categoryInput: {
        marginTop: 8,
        paddingBottom: 10,
        fontSize: 18,
    },
});

export const categoryStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        paddingLeft: 5,
        marginTop: 3,
        marginLeft: 0,
    }
})


export const commentStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 35,
        width:320,
        backgroundColor: theme.lightGreen,
        borderRadius: 50,
        justifyContent:'flex-start',
        paddingLeft: 15,
        marginTop: 4,
        marginBottom: 3,
        marginLeft: 40,
    },

    contents: {
        flex: 1,
        fontSize: 15,
        color: theme.text,
    }
})

export const taskStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.itemBackground,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 3,
        marginLeft: 0,
    },

    contents: {
        flex: 1,
        fontSize: 20,
        color: theme.text,
    },
});

export const DuedateButtonStyle = StyleSheet.create({
    button: {
        width: 70,
        height: 30,
        backgroundColor: theme.lightGreen,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },

    text: {
        fontSize: 12,
        color: theme.itemBackground,
    }
})