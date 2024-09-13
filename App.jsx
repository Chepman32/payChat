import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './AuthScreen';
import { PINScreen } from './PINScreen';
import { ProfileScreen } from './ProfileScreen';
import search from "./assets/icons/search.png";
import chat from "./assets/icons/chat.png";
import user from "./assets/icons/user.png";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';
import { WelcomeScreen } from './WelcomeScreen';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, navigation }) => {
  const currentRoute = state.routes[state.index].name;

  useEffect(() => {
    console.log('Current route name:', currentRoute);
  }, [currentRoute, state.index, state.routes]);

  const isTabBarVisible = !(currentRoute === 'AuthScreen' || currentRoute === 'PINScreen');

  return isTabBarVisible ? (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const icon = index === 0 ? search : index === 1 ? chat : user;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={[
              styles.tabItem,
              index === 1 && styles.middleTabContainer,
              isFocused && index !== 1 && styles.focusedTab,
            ]}
          >
            <View style={index === 1 ? styles.middleTab : styles.iconContainer}>
              <Image
                source={icon}
                style={[
                  styles.icon,
                  index === 1 && styles.middleIcon,
                  isFocused && index !== 1 && styles.focusedIcon
                ]}
                resizeMode='contain'
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  ) : null;
};

export default function App() {
  return (
    <>
      <View style={styles.statusBarBackground}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      </View>

      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Search" component={WelcomeScreen} />
          <Tab.Screen name="Chat" component={PINScreen} />
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
          <Tab.Screen name="AuthScreen" component={AuthScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: StatusBar.currentHeight || SCREEN_HEIGHT * 0.07,
    backgroundColor: '#111828',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    borderRadius: 30,
    height: 60,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    borderTopWidth: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10, 
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  middleTabContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  middleTab: {
    backgroundColor: '#FFFFFF',
    borderRadius: SCREEN_WIDTH * 0.09,
    width: SCREEN_WIDTH * 0.18,
    height: SCREEN_WIDTH * 0.18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  focusedTab: {
    backgroundColor: '#38BDF8',
    borderRadius: 30,
    height: '100%',
    width: '100%',
  },
  iconContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#94A3B8',
  },
  middleIcon: {
    tintColor: '#0F172A',
    width: SCREEN_WIDTH * 0.08,
    height: SCREEN_WIDTH * 0.08,
  },
  focusedIcon: {
    tintColor: '#FFFFFF',
  },
});