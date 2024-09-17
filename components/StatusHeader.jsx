import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import notifications from "../assets/icons/notifications.png"
import settings from "../assets/icons/settings_black.png"
import arrowUp from "../assets/icons/arrowUp.png"
import { SCREEN_WIDTH } from '../constants'

export const StatusHeader = () => {
  return (
      <View style={styles.container}>
          <Image source={notifications} style={styles.icon} resizeMode='contain' />
          <View style={styles.row}>
          <Text style={styles.blackText}>0</Text>
        <Image source={arrowUp} style={styles.centeredIcon} resizeMode='contain' />
          <Text style={styles.blueText}>0</Text>
        </View>
          <Image source={settings} style={styles.icon} resizeMode='contain' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    icon: {
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_WIDTH * 0.07
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    centeredIcon: {
        marginHorizontal: SCREEN_WIDTH * 0.02,
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_WIDTH * 0.07
    },
    blackText: {
        fontSize: SCREEN_WIDTH * 0.05,
        fontWeight: "600",
        color: "#111828"
    },
    blueText: {
        fontSize: SCREEN_WIDTH * 0.05,
        fontWeight: "600",
        color: "#369FB5"
    }
})