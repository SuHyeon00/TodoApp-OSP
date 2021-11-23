import {StyleSheet, Dimensions} from 'react-native';
import {theme} from './theme';

export const viewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
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
        marginTop: 20,
    }
});

export const barStyles = StyleSheet.create({
    statusbar: {
        backgroundColor: theme.background,
    },
});