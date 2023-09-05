import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        height: '100%'
    },
    text: {
        color: '#fff',
    },
    input: {
        borderRadius: 5,
        height: 54,
        width: 271,
        backgroundColor: '#262626',
        padding: 10,
        color: '#fff',
    },
    main: {
        flexDirection: 'row',
        padding: 24,
        gap: 4,
        marginTop: -52
    },
    inputSome: {
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 5,
    },
    containerText: {
        flexDirection: 'row',
        gap: 142,
        marginLeft: 24,
    },
    textFinish: {
        color: '#1E6F9F',
        fontWeight: 'bold',
        fontSize: 14,
        flex: 1,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        gap: 20,
    },
    footerText: {
        color: '#808080',
        maxWidth: 280

    },

})

