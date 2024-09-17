import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants'
import { useNavigation } from '@react-navigation/native'
import search_big from '../assets/icons/search_big.png'

export const Search = () => {
    const [value, setValue] = React.useState('')
    const [filteredData, setFilteredData] = React.useState([])
    const navigation = useNavigation()
    const data = [
        {
            id: 1,
            name: 'Горохов Андрей Николаевич',
            username: 'Goroxxx',
            status: 'online',
            avatar: require('../assets/images/User.png'),
            lastMessage: 'Привет, как дела?',
        },
    ]

    const handleSearch = (text) => {
        setValue(text);
        if (text) {
            const filtered = data.filter((item) =>
                item.name.toLowerCase().includes(text.toLowerCase()) ||
                item.username.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    };

    React.useEffect(() => {
        setFilteredData(data);
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.searchItem} key={item.id}>
            <Image source={item.avatar} style={styles.searchItemImage} />
            <View style={styles.searchItemContent}>
                <Text style={styles.searchItemTitle}>{item.name}</Text>
                <View style={styles.row}>
                    <View style={styles.statusIconContainer}>
                        <View style={[styles.statusIcon, { backgroundColor: item.status === 'online' ? '#34C759' : '#9EA1A8' }]}/>
                    </View>
                    <Text style={styles.searchItemGrayText}>{item.username}</Text>
                    <View style={styles.messageIconContainer}>
                        <Image source={require('../assets/images/message.png')} style={styles.messageIcon} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={SCREEN_HEIGHT * 0.15}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.results}>
                    {
                        filteredData.length > 0 && value
                            ? <FlatList
                                data={filteredData}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                style={styles.searchResults}
                            />
                            : (
                                <View style={styles.noResultsContainer}>
                                    <Image source={search_big} style={styles.emptySearchIcon} />
                                    <Text style={styles.noResultsText}>You don't have any contacts, use the search</Text>
                                </View>
                            )
                    }
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Поиск"
                        value={value}
                        onChangeText={handleSearch}
                        placeholderTextColor="#000"
                    />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    results: {
        width: SCREEN_WIDTH,
        flex: 1, // Make the results area grow to fit available space
    },
    inputContainer: {
        width: SCREEN_WIDTH,
        alignItems: "center",
        position: "relative",
        paddingVertical: SCREEN_HEIGHT * 0.02,
    },
    searchIcon: {
        position: "absolute",
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_WIDTH * 0.07,
        top: SCREEN_HEIGHT * 0.033,
        left: SCREEN_WIDTH * 0.1,
        zIndex: 1
    },
    searchInput: {
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT * 0.06,
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: '#9EA1A8',
        borderRadius: SCREEN_HEIGHT * 0.012,
        paddingHorizontal: SCREEN_WIDTH * 0.05,
        paddingLeft: SCREEN_WIDTH * 0.12,
        fontSize: SCREEN_WIDTH * 0.04,
        fontWeight: "600"
    },
    searchItem: {
        width: SCREEN_WIDTH * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SCREEN_HEIGHT * 0.01,
        paddingLeft: SCREEN_WIDTH * 0.05,
    },
    searchItemContent: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SCREEN_HEIGHT * 0.005,
    },
    searchItemImage: {
        width: SCREEN_WIDTH * 0.15,
        height: SCREEN_WIDTH * 0.15,
        borderRadius: SCREEN_WIDTH * 0.075,
        marginRight: SCREEN_WIDTH * 0.05,
    },
    searchItemTitle: {
        fontSize: SCREEN_WIDTH * 0.05,
        fontWeight: '600',
    },
    statusIconContainer: {
        marginRight: SCREEN_WIDTH * 0.02,
    },
    statusIcon: {
        width: SCREEN_WIDTH * 0.03,
        height: SCREEN_WIDTH * 0.03,
        borderRadius: SCREEN_WIDTH * 0.015,
    },
    searchItemGrayText: {
        fontSize: SCREEN_WIDTH * 0.04,
        fontWeight: '400',
        color: '#9EA1A8',
        flex: 1,
    },
    messageIconContainer: {
        marginLeft: 'auto',
    },
    messageIcon: {
        width: SCREEN_WIDTH * 0.06,
        height: SCREEN_WIDTH * 0.06,
    },
    emptyMessage: {
        textAlign: 'center',
        marginTop: SCREEN_HEIGHT * 0.02,
        fontSize: SCREEN_WIDTH * 0.045,
        color: '#9EA1A8',
    },
    noResultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptySearchIcon: {
        width: SCREEN_WIDTH * 0.2,
        height: SCREEN_WIDTH * 0.2,
        marginTop: SCREEN_HEIGHT * 0.1,
    },
    noResultsText: {
        marginTop: SCREEN_HEIGHT * 0.02,
        fontSize: SCREEN_WIDTH * 0.05,
        fontWeight: '400',
        color: '#111828',
    }
})