import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';
import { useNavigation } from '@react-navigation/native';

const OTPInputComponent = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const navigation = useNavigation()
  const inputRefs = useRef([]);
  useEffect(() => {
    if (otp[otp.length - 1]) {
      navigation.navigate("ProfileScreen")
    }
  }, [navigation, otp])

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [timer]);

  // Function to handle OTP input change
  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    // Automatically move to the next input if a number is entered
    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (otp[index] !== '') {
        // If there's a digit, just clear it
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        // If the current input is empty and it's not the first input, move to the previous input
        inputRefs.current[index - 1].focus();
        // Clear the previous input
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={SCREEN_HEIGHT * 0.1} >
      <Text style={styles.mainText}>Enter the sent PIN</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            style={styles.otpInput}
            keyboardType="decimal-pad"
            maxLength={1}
            ref={el => inputRefs.current[index] = el}
          />
        ))}
      </View>
      <Text style={styles.timerText}>
        Отправить повторно через {String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mainText: {
    fontSize: SCREEN_WIDTH * 0.05,
    fontWeight: '600',
    color: '#111828',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
  },
  timerText: {
    fontSize: 16,
    color: '#3b82f6',
  },
});

export default OTPInputComponent;