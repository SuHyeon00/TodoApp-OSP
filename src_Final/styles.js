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
    category: {
        fontSize: 20,
        fontWeight: '600',
        color: theme.text,
        alignItems: 'flex-start',
        marginVertical: 10,
    }
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
