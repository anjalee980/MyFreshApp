import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: '1',
    name: 'Aloe Vera Facemask',
    price: 24,
    category: 'skincare',
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
  },
  {
    id: '2',
    name: 'Anti Aging Serum',
    price: 48,
    category: 'skincare',
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
  },
  {
    id: '3',
    name: 'Hair Repair Oil',
    price: 30,
    category: 'haircare',
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
  },
];

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>
          Bytespark <Text style={styles.logoHighlight}>Care</Text>
        </Text>

        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => router.push('/search')}>
            <Ionicons name="search" size={20} color="#fff" style={{ marginRight: 15 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/cart')}>
            <View style={[styles.cartContainer, { marginRight: 15 }]}>
              <Ionicons name="bag-outline" size={20} color="#fff" />
              {totalItems > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{totalItems}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/profile')}>
            <View style={styles.profileCircle}>
              <View style={styles.profileInnerBg}>
                <Ionicons name="person-outline" size={16} color="#C59A6D" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={{ padding: 15, flex: 1 }}>

        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#aaa" />
          <TextInput
            placeholder="Search products..."
            placeholderTextColor="#aaa"
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />
        </View>

        {filteredProducts.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="search-outline" size={60} color="#555" />
            <Text style={styles.emptyText}>No products found</Text>
            <Text style={styles.emptySubText}>Try searching something else</Text>
          </View>
        ) : (
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>${item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        )}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1410',
    paddingTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  logo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  logoHighlight: {
    color: '#C59A6D',
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cartContainer: {
    position: 'relative',
  },

  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: '#C59A6D',
    borderRadius: 10,
    paddingHorizontal: 5,
  },

  badgeText: {
    color: '#000',
    fontSize: 10,
  },

  profileCircle: {
    width: 38,
    height: 38,
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: '#C59A6D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileInnerBg: {
    width: 25,
    height: 25,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(197, 154, 109, 0.15)',
  },

  divider: {
    height: 1,
    backgroundColor: '#2a221d',
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a221d',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#2a221d',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },

  name: {
    color: '#fff',
    fontSize: 14,
  },

  price: {
    color: '#C59A6D',
    marginTop: 5,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  emptyText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },

  emptySubText: {
    color: '#888',
    fontSize: 13,
    marginTop: 5,
  },
});