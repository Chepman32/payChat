import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants'
import OTPInputComponent from '../OTPInputComponent'

export const PINScreen = () => {
  return (
    <View style={styles.container}>
          <Image source={require('../assets/images/big_logo.png')} style={styles.image} resizeMode='contain' />
          <OTPInputComponent />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: SCREEN_WIDTH * 0.45,
        height: SCREEN_HEIGHT * 0.45,
    },
})