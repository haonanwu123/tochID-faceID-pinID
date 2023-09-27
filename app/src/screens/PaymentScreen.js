import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Image, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CardSVG from '../components/CardSVG';

export default function PaymentScreen({setIsAuthenticated}) {
    const dismissKeyboard = () => {
        Keyboard.dismiss
    }
    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Payment</Text>
            <Image style={styles.image} source={{uri: 'https://i.imgur.com/63CSRFO.jpeg'}} />
            <Text style={{color: 'gray', fontWeight: 'bold', marginTop: 15}}>PAYING</Text>
            <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 15}}>Yusuf</Text>
            <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 15}}>$50.00</Text>
            <TextInput
               style={styles.textInput}
               placeholder="Add a note"
               placeholderTextColor="gray"
            />
            <CardSVG />
            <TouchableOpacity
                onPress={() => setIsAuthenticated(false)}
                style={styles.btn}
            >
                <Text style={styles.text}>Log out</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
    },

    textInput: {
        width: '90%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#00000010',
        marginBottom: 20,
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },

    btn: {
        width: '100%',
        alignItems: 'center',
        jhustifyContent: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        marginTop: 50,
    },

    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: 15,
        paddingBottom: 20,
    }
})