import {StyleSheet, Dimensions} from 'react-native';
import {theme} from './theme';

export const viewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        marginLeft: 20,
    },

    divisionLine: {
        height: 5,
        backgroundColor: theme.Green,
        width: Dimensions.get('window').width-40,
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

    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginHorizontal: 20,
    },

    category: {
        fontSize: 20,
        fontWeight: '600',
        color: theme.text,
        alignItems: 'flex-start',
        marginTop: 20,
    }
});

export const listStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width-50,
    },

    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 10,
        width: 70,
    },

    circle: {
        width: 20,
        height: 20,
        borderRadius: 15,
        borderColor: theme.main,
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20,
    },
});

export const barStyles = StyleSheet.create({
    statusbar: {
        backgroundColor: theme.background,
    },
});