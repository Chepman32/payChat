import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './constants'

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/big_logo.png')} style={styles.image} resizeMode='contain' />
      <Text style={styles.mainText}>
        Вы хотите задать вопрос или заработать на ответе?
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.blueButton}>
          <Text style={styles.blueButtonText}>Задать вопрос</Text>
        </View>
        <View style={styles.whiteButton}>
          <Text style={styles.whiteButtonText}>Заработать</Text>
        </View>
          </View>
          <Text style={styles.enter}>Войти</Text>
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
    justifyContent: 'flex-start',
    paddingTop: SCREEN_HEIGHT * 0.1,
  },
  image: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.3,
  },
  mainText: {
    width: SCREEN_WIDTH * 0.8,
    marginTop: SCREEN_HEIGHT * 0.05,
    textAlign: 'center',
    fontSize: SCREEN_WIDTH * 0.05,
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
  }
})