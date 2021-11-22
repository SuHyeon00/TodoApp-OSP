import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const viewStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: theme.background,
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },

    dailycontainer: {  //today's completion rate 화면
        flex:1,
        backgroundColor: "#999999",
        alignItems: 'baseline',
        justifyContent: 'flex-end',
        paddingBottom: 100,
        
    },

    login: {
        backgroundColor: theme.background,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color: theme.text,
        //line: theme.line,
    },

    signup: {
        backgroundColor: theme.background,
        alignItems: 'flex-start',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        justifyContent: 'flex-start',
        color: theme.text,
    },

    dailyReport: {
        backgroundColor: theme.line,
        borderColor: theme.line,
        alignItems: 'center',
        width: 300,
        height: 400,
        top: 150,
        justifyContent: 'flex-start',
    },

    handleTask: {
        backgroundColor: theme.background,
        borderColor: theme.background,
        alignItems: 'center',
        width: 200,
        height: 150,
    },
   
});

export const textStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: theme.main,
        alignItems: 'flex-start',
        marginTop: 50,
        marginLeft: 20,
        marginBottom: 20,
    
    },
    header: {
        fontSize: 23,
        fontWeight: '800',
        color: theme.main,
        alignItems: 'flex-start',
        marginTop: 8,
        marginLeft: 20,
        marginBottom: 10,
    },
    item: {
        fontSize: 18,
        fontWeight: '600',
        color: theme.main,
        alignItems: 'flex-start',
        marginTop: 20,
        marginLeft: 20,
    },
    friendsaccount: {
        fontSize: 23,
        fontWeight: '800',
        color: theme.main,
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 30,
        marginBottom: 30,
    },

    semititle:
    {
        fontSize: 30,
        fontWeight: 'bold',
        color: theme.main,
        alignItems: 'flex-start',
        marginTop: 100,
        marginLeft: 20,
        marginBottom: 0,
    },

    contents: {
        fontSize: 20,
        //fontFamily: 'Lato',
        color: theme.text,
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 0,
    },

    logo: {
        fontSize: 25,
        //fontFamily: 'Lato',
        textAlign: 'center',
        fontWeight: 'bold',
        color: theme.text,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    
});

export const iconStyles = StyleSheet.create({
    icon: {
        tintColor: theme.main,
        width: 30,
        height: 30,
        margin: 10,
    },
    right: {
        tintColor: theme.green,
        width: 30,
        height: 30,
        margin: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    small: {
        tintColor: theme.green,
        width: 15,
        height: 15,
        margin: 10
    }
})

/*
export const viewStyles = StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    dailyReport: {
        backgroundColor: theme.line,
        borderColor: theme.line,
        alignItems: 'center',
        width: 300,
        height: 400,
        top: 150,
        justifyContent: 'flex-start',
    },

    handleTask: {
        backgroundColor: theme.background,
        borderColor: theme.background,
        alignItems: 'center',
        width: 200,
        height: 150,
    },

    login: {
        backgroundColor: theme.background,
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: theme.text,
        //line: theme.line,
    }
});

export const textStyles = StyleSheet.create({
    main: {
        fontSize: 48,
        fontWeight: 'bold',
        //fontFamily: 'Lato',
        color: theme.title,
        alignItems: 'center',
        width: 258,
        height: 37,
        left: 91,
        top: 128,
    },

    title: {
        fontSize: 25,
        //fontFamily: 'Lato',
        fontWeight: 'bold',
        color: theme.title,
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 0,
    },

    subtitle: {
        fontSize: 20,
        //fontFamily: 'Lato',
        fontWeight: 'bold',
        color: theme.title,
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 0,
    },

    contents: {
        fontSize: 20,
        //fontFamily: 'Lato',
        color: theme.text,
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 0,
    },

    textBox: {
        fontSize: 20,
        //fontFamily: 'Lato',
        color: theme.line,
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 0,
    }
});

export const inputStyles = StyleSheet.create({
    description: {
        fontSize: 17,
        width: 200,
        height: 30,
        marginTop: 10,
        marginLeft: 3,
        color: theme.line,
        backgroundColor: theme.main,
        borderColor: theme.line,
        borderWidth: 1,
    },
});

export const barStyles = StyleSheet.create({
    statusbar: {
        backgroundColor: theme.title,
        color: theme.background,
    }
});

export const chartStyles = StyleSheet.create({
    back: {
        width: 270,
        height: 30,
        backgroundColor: theme.background,
        
    },

    front: {
        width: 200,
        height: 30,
        backgroundColor: theme.title,
        
    }
});
*/