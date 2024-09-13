import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './constants';
import Facebook from './assets/icons/Facebook.png';
import instagram from './assets/icons/instagram.png';
import share from './assets/icons/share.png';
import up from './assets/icons/up.png';
import down from './assets/icons/down.png';
import check from './assets/icons/check-circle.png';
import bell from './assets/icons/bell.png';
import settings from './assets/icons/settings.png';
import { useNavigation } from '@react-navigation/native';

const Title = () => (
    <View style={styles.row}>
        <Image source={check} style={styles.checkIcon} resizeMode="contain" />
        <Text style={styles.titleText}>Profile</Text>
    </View>
)

export const ProfileScreen = () => {
    const navigation = useNavigation()

  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.main}>
              <Image source={require('./assets/images/avatar.png')} style={styles.image} resizeMode="cover" />
              <Text style={styles.title}>Горохов Андрей Николаевич</Text>
              <Text style={styles.subtitle}>Слесарь - Автокрановщик</Text>
              <View style={styles.credits}>
                  <Image source={require('./assets/icons/credits.png')} style={styles.creditsIcon} resizeMode="contain" />
                  <Text style={styles.creditsText}>1000</Text>
              </View>
              <Text style={styles.desc}>
              I am an ordinary crane mechanic from the heartland of Russia. I know all about locksmiths and crane operators.
              </Text>
              <Text style={styles.showMore}>Read more</Text>
              <View style={styles.socials}>
                <Image source={share} style={styles.socialIcon} resizeMode="contain" />
                <Image source={Facebook} style={styles.socialIcon} resizeMode="contain" />
                <Image source={instagram} style={styles.socialIcon} resizeMode="contain" />
              </View>
          </View>
          <View style={styles.money}>
              <View style={styles.moneyLeftItem}>
                  <Text style={styles.moneyThinText}>Balance</Text>
                  <Text style={styles.moneyBigText}>$0</Text>
                  <View style={styles.row}>
                      <Image source={up} style={styles.moneyIcon} resizeMode="contain" />
                      <Text style={styles.moneyThickText}>Пополнить</Text>
                  </View>
              </View>
              <View style={styles.moneyRightItem}>
                <Text style={[styles.moneyThinText, styles.inActiveText]}>Profit</Text>
                <Text style={[styles.moneyBigText, styles.inActiveText]}>$0</Text>
                <View style={styles.row}>
                    <Image source={down} style={styles.moneyIcon} resizeMode="contain" />
                      <Text style={[styles.moneyThickText, styles.inActiveText]}>Вывести</Text>
                </View>
              </View>
          </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: '#fff',
    },
    main: {
        width: SCREEN_WIDTH,
        paddingVertical: SCREEN_HEIGHT * 0.03,
        paddingHorizontal: SCREEN_WIDTH * 0.1,
        alignItems: 'center',
        backgroundColor: '#111828',
    },
    image: {
        width: SCREEN_WIDTH * 0.4,
        height: SCREEN_WIDTH * 0.4,
        borderRadius: SCREEN_WIDTH * 0.2,
        marginBottom: SCREEN_HEIGHT * 0.02,
    },
    title: {
        fontSize: SCREEN_WIDTH * 0.1,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
    },
    subtitle: {
        marginBottom: SCREEN_HEIGHT * 0.02,
        fontSize: SCREEN_WIDTH * 0.05,
        fontWeight: '400',
        color: '#9EA1A8',
    },
    credits: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SCREEN_HEIGHT * 0.02,
        paddingHorizontal: SCREEN_WIDTH * 0.05,
        paddingVertical: SCREEN_HEIGHT * 0.005,
        backgroundColor: '#fff',
        borderRadius: SCREEN_WIDTH * 0.05,
    },
    creditsIcon: {
        width: SCREEN_WIDTH * 0.05,
        height: SCREEN_WIDTH * 0.05,
        marginRight: SCREEN_WIDTH * 0.02,
    },
    creditsText: {
        fontSize: SCREEN_WIDTH * 0.04,
        fontWeight: '500',
        color: '#369FB5',
    },
    desc: {
        fontSize: SCREEN_WIDTH * 0.04,
        fontWeight: '400',
        textAlign: 'center',
        color: '#fff',
        marginBottom: SCREEN_HEIGHT * 0.01,
    },
    showMore: {
        fontSize: SCREEN_WIDTH * 0.04,
        color: '#369FB5',
        marginBottom: SCREEN_HEIGHT * 0.02,
    },
    socials: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    socialIcon: {
        width: SCREEN_WIDTH * 0.08,
        height: SCREEN_WIDTH * 0.08,
    },
    money: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH,
        marginVertical: SCREEN_HEIGHT * 0.02,
        paddingHorizontal: SCREEN_WIDTH * 0.05,
    },
    moneyThinText: {
        fontSize: SCREEN_WIDTH * 0.04,
        fontWeight: '400',
        color: '#111828',
    },
    moneyBigText: {
        fontSize: SCREEN_WIDTH * 0.08,
        fontWeight: '600',
        color: '#111828',
    },
    moneyThickText: {
        fontSize: SCREEN_WIDTH * 0.04,
        fontWeight: '600',
        color: '#111828',
    },
    inActiveText: {
        color: '#CED2DC',
    },
    moneyLeftItem: {
        alignItems: 'flex-start',
    },
    moneyRightItem: {
        alignItems: 'flex-end',
    },
    row: {
        flexDirection: 'row',
    },
    moneyIcon: {
        width: SCREEN_WIDTH * 0.05,
        height: SCREEN_WIDTH * 0.05,
        marginRight: SCREEN_WIDTH * 0.02,
    },
    checkIcon: {
        width: SCREEN_WIDTH * 0.08,
        height: SCREEN_WIDTH * 0.08,
    },
    titleText: {
        fontSize: SCREEN_WIDTH * 0.05,
        fontWeight: '600',
        color: '#fff',
    }
});
