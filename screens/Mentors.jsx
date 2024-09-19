import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import message_grey from '../assets/icons/message_grey.png';
import message_red from '../assets/icons/message_red.png';
import message_blue from '../assets/icons/message_blue.png';
import { SCREEN_WIDTH } from '../constants';
import checked_green from '../assets/icons/checked_green.png';
import checked_grey from '../assets/icons/checked_grey.png';
import { useNavigation } from '@react-navigation/native';
import { StatusHeader } from '../components/StatusHeader';

const mentors = [
  { id: '1', name: 'Горохов Андрей Николаевич', username: 'Goroxxx', status: 'active', avatar: require('../assets/images/User.png'), duration: '00:00:05' },
  { id: '2', name: 'Горохов Андрей Николаевич', username: 'Goroxxx', status: 'active', avatar: null, duration: null },
  { id: '3', name: 'Горохов Андрей Николаевич', username: 'Goroxxx', status: 'active', avatar: require('../assets/images/User2.png'), duration: '00:01:05' },
  { id: '4', name: 'Горохов Андрей Николаевич', username: 'Goroxxx', status: 'inactive', avatar: null, duration: null },
  { id: '5', name: 'Горохов Андрей Николаевич', username: 'Goroxxx', status: 'inactive', avatar: require('../assets/images/User.png'), duration: null },
  { id: '6', name: 'Горохов Андрей Николаевич', username: 'Goroxxx', status: 'offline', avatar: null, duration: null },
  { id: '7', name: 'Горохов Андрей Николаевич', username: 'Goroxxx', status: 'offline', avatar: require('../assets/images/avatar.png'), duration: null },
];

const MentorItem = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.mentorItem} onPress={() => navigation.navigate('ProfileScreen')}>
          {item.avatar ? (
            <Image source={item.avatar} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.avatarPlaceholder]}>
              <Text style={styles.avatarText}>{item.name[0]}</Text>
            </View>
          )}
          <View style={styles.mentorInfo}>
            <Text style={styles.mentorName}>{item.name}</Text>
                  <View style={styles.usernameContainer}>
                      <View style={styles.row}>
                      <Image source={item.status === 'active' ? checked_green : checked_grey} style={styles.statusIcon} />
                      <Text style={styles.mentorUsername}>{item.username}</Text>
                      </View>
                      <View style={styles.row}>
                                  {
                                      item.status === 'active' && <Text style={styles.mentorUsername}>{item.duration}</Text>
                                  }
                <Image source={item.status === 'active' ? message_blue : item.status === 'inactive' ? message_red : message_grey} style={styles.messageIcon} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
}

const MentorList = () => {
  return (
      <View style={styles.container}>
      <Text style={styles.title}>My mentor</Text>
      
      <FlatList
        data={mentors}
        renderItem={({ item }) => <MentorItem item={item} />}
              keyExtractor={item => item.id}
              style={styles.chatsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:
    {
        lex: 1, backgroundColor: 'white'
    },
    title: {
        fontSize: 20, fontWeight: 'bold', padding: 16
    },
    chatsList: {
        width: '100%',
        height: '100%',
    },
    mentorItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    },
    avatarPlaceholder: {
        backgroundColor: '#d1d5db',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarText: {
        fontSize: 18,
        color: 'white'
    },
    mentorInfo: {
        flex: 1
    },
    mentorName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    mentorUsername: {
        color: '#6b7280',
        fontSize: 14
    },
    statusIcon: {
        width: SCREEN_WIDTH * 0.04,
        height: SCREEN_WIDTH * 0.04,
        marginRight: SCREEN_WIDTH * 0.02
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    duration: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    redText: {
        color: 'red',
    },
    blueText: {
        color: '#3b82f6'
    },
    writeButton: {
        color: '#3b82f6'
    },
    messageIcon: {
        width: SCREEN_WIDTH * 0.06,
        height: SCREEN_WIDTH * 0.06
    },
    fab: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: '#3b82f6',
        borderRadius: 28,
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default MentorList;