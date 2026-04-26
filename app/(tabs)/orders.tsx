import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { router } from 'expo-router';
import Header from '../../components/Header';

export default function Shop() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <View style={styles.searchWrap}>
        
        <View style={styles.searchPill}>
          <Ionicons name="search" size={18} color="#5c4634" />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search products..."
            placeholderTextColor="#a8937b"
            style={styles.searchInput}
          />

          <Ionicons name="camera-outline" size={16} color="#5c4634" />
          <Ionicons name="mic-outline" size={16} color="#5c4634" style={{ marginLeft: 8 }} />
        </View>

        {/* Filter Button */}
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => router.push('/filters')}
        >
          <Ionicons name="options-outline" size={20} color="#2a221d" />
        </TouchableOpacity>

      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.text}>Order</Text>
      </View>

    </View>
  );
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1410',
  },

  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 10,
  },

  searchPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a221d',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },

  searchInput: {
    flex: 1,
    color: '#fff',
    marginHorizontal: 10,
    fontSize: 14,
  },

  filterBtn: {
    marginLeft: 10,
    backgroundColor: '#C59A6D',
    padding: 10,
    borderRadius: 50,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 18,
  },
});