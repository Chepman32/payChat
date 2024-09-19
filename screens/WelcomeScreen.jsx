import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants'
import { useNavigation } from '@react-navigation/native'
import b1 from "../assets/images/b1.png"
import b2 from "../assets/images/b2.png"

export const WelcomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/big_logo.png')} style={styles.image} resizeMode='contain' />
      <Text style={styles.mainText}>
        Вы хотите задать вопрос или заработать на ответе?
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Chats', { screen: 'Mentors' })} style={styles.blueButton}>
          <Text style={styles.blueButtonText}>Задать вопрос</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chats', { screen: 'Mentors' })} style={styles.whiteButton}>
          <Text style={styles.whiteButtonText}>Заработать</Text>
        </TouchableOpacity>
          </View>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
      <Text style={styles.enter}>Войти</Text>
      </TouchableOpacity>
      <Image source={b1} style={styles.b1} resizeMode='contain' />
      <Image source={b2} style={styles.b2} resizeMode='contain' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: SCREEN_HEIGHT * 0.1,
    position: 'relative',
  },
  image: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.3,
  },
  mainText: {
    width: SCREEN_WIDTH * 0.8,
    marginTop: SCREEN_HEIGHT * 0.05,
    textAlign: 'center',
    fontSize: SCREEN_WIDTH * 0.07,
    fontWeight: '600',
    color: '#111828',
  },
  buttonContainer: {
    width: SCREEN_WIDTH * 0.8,
    marginTop: SCREEN_HEIGHT * 0.05,
  },
  blueButton: {
    width: '100%',
    marginBottom: SCREEN_HEIGHT * 0.02,
    paddingVertical: SCREEN_HEIGHT * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#369FB5",
    borderRadius: SCREEN_WIDTH * 0.07,
  },
  blueButtonText: {
    fontSize: SCREEN_WIDTH * 0.05,
    fontWeight: '600',
    color: '#fff',
  },
  whiteButton: {
    width: '100%',
    paddingVertical: SCREEN_HEIGHT * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: SCREEN_WIDTH * 0.07,
    borderWidth: 1,
    borderColor: '#111828',
  },
  whiteButtonText: {
    fontSize: SCREEN_WIDTH * 0.05,
    fontWeight: '600',
    color: '#111828',
    },
    enter: {
        marginTop: SCREEN_HEIGHT * 0.05,
        fontSize: SCREEN_WIDTH * 0.05,
        fontWeight: '600',
        color: '#369FB5',
  },
  b1: {
    position: 'absolute',
    top: SCREEN_HEIGHT * -0.15,
    left: 0,
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.5,
  },
  b2: {
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 0.2,
    right: SCREEN_WIDTH * -0.1,
    zIndex: -1,
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.5,
  },
})