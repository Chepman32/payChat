// Import necessary modules
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';

const AuthInput = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('./assets/icons/login.png')} style={styles.icon} />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Email or Phone"
        placeholderTextColor="#7E7E7E"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8, // rounded corners
    paddingVertical: SCREEN_HEIGHT * 0.02,
    paddingHorizontal: 15,
    margin: 10,
  },
    icon: {
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_WIDTH * 0.07,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: SCREEN_WIDTH * 0.04,
    color: '#000',
  },
});

export default AuthInput;