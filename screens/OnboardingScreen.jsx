import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

export default function OnboardingScreen() {
  const navigation = useNavigation()

  return (
    <Onboarding
    onDone={() => navigation.navigate('Auth')}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/images/big_logo.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fe6e58',
        image: <Image source={require('../assets/images/big_logo.png')} />,
        title: 'The Title',
        subtitle: 'This is the subtitle that sumplements the title.',
      },
      {
        backgroundColor: '#999',
        image: <Image source={require('../assets/images/big_logo.png')} />,
        title: 'Triangle',
        subtitle: "Beautiful, isn't it?",
      },
    ]}
      SkipButtonComponent={() => (
        <TouchableOpacity onPress={() => navigation.navigate('WelcomeScreen')} >
          <Text style={{ color: '#369FB5', position: 'absolute', left: SCREEN_WIDTH / 2.3, bottom: SCREEN_HEIGHT * 0.1, fontSize: SCREEN_WIDTH * 0.05, fontWeight: '600' }} >Skip</Text>
        </TouchableOpacity>
      )}
      NextButtonComponent={() => null}
      onSkip={() => navigation.navigate('WelcomeScreen')}
    
  />
  )
}