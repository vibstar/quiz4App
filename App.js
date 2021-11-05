import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return ( <View style = { styles.topBox } >

        <Text style = {styles.topText}> Github Viewer </Text>
        <StatusBar style = "auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBox: {
        flex: .2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topText : {
        color: 'red',
        fontSize: 20,
    }
});