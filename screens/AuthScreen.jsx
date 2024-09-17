import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants'
import AuthInput from '../AuthInput'
import Facebook from "../assets/icons/Facebook.png"
import instagram from "../assets/icons/instagram.png"

export default function AuthScreen() {
  return (
    <View style={styles.container}>
          <Image source={require('../assets/images/big_logo.png')} style={styles.image} resizeMode='contain' />
          <Text style={styles.mainText}>Login by email or phone</Text>
          <AuthInput />
          <Text style={styles.grayText}>Use it to log in with the help of</Text>
          <View style={styles.socials}>
              <Image source={Facebook} style={styles.socialIcon} resizeMode='contain' />
              <Image source={instagram} style={styles.socialIcon} resizeMode='contain' />
          </View>
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
        width: SCREEN_WIDTH * 0.5,
        height: SCREEN_HEIGHT * 0.5,
    },
    mainText: {
        marginTop: SCREEN_HEIGHT * 0.05,
        fontSize: SCREEN_WIDTH * 0.05,
        fontWeight: '600',
        color: '#111828',
    },
    grayText: {
        marginVertical: SCREEN_HEIGHT * 0.04,
        fontSize: SCREEN_WIDTH * 0.03,
        fontWeight: '400',
        color: '#787878',
    },
    socials: {
        width: SCREEN_WIDTH * 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    socialIcon: {
        width: SCREEN_WIDTH * 0.1,
        height: SCREEN_HEIGHT * 0.1,
    },
})