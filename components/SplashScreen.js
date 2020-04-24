import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Splash extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={require('../img/icon-image.png')} />
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2a723',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 200
    }
})
