import { StyleSheet } from "react-native";
import { theme } from "./theme";

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
    
});