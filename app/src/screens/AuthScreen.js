import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
const myImage = require('../../assets/1.png');

export default function Auth({onAuthenticate}) {
    return(
        <View>
            <Image source={myImage} style={styles.image} />
            <Text style={styles.title}>EXPENIO</Text>
            <Text style={styles.description}>Going cashless has never been this easier with the world's most leading expense manager.</Text>
            <TouchableOpacity
               onPress={onAuthenticate}
               style={styles.btn}>
               <Text style={styles.Text}>Login</Text>    
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        borderRadius: 5,
    },

    image: {
        width: 432,
        height: 461,
    },

    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },

    title: {
        fontSize: 50,
        fontWeight: '400',
        textAlign: 'center',
        marginVertical: 30,
    },

    description: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 50,
    }

})