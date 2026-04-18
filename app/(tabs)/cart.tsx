import { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useCart } from '../../context/CartContext';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CartScreen() {
  const insets = useSafeAreaInsets();
  const { cartItems, increaseQty, decreaseQty } = useCart();
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return cartItems;
    return cartItems.filter((item: { name: string }) =>
      item.name.toLowerCase().includes(q)
    );
  }, [cartItems, search]);

  const topBar = (
    <View style={[styles.headerRow, { paddingTop: Math.max(insets.top, 12) }]}>
      <TouchableOpacity onPress={() => router.back()} hitSlop={10}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>My Cart</Text>
      <TouchableOpacity hitSlop={10}>
        <Ionicons name="heart-outline" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        {topBar}
        <View style={styles.searchWrap}>
          <View style={styles.searchPill}>
            <Ionicons name="search" size={18} color="#5c4634" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="search by brands"
              placeholderTextColor="#f3e6d4"
              style={styles.searchInput}
            />
            <Ionicons name="camera-outline" size={16} color="#5c4634" />
            <Ionicons
              name="mic-outline"
              size={16}
              color="#5c4634"
              style={{ marginLeft: 8 }}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={20} color="#2a221d" />
          </TouchableOpacity>
        </View>
        <View style={styles.emptyWrapper}>
          <Ionicons name="cart-outline" size={72} color="#888" />
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <TouchableOpacity
            onPress={() => router.push('/shop')}
            style={styles.shopBtn}
          >
            <Text style={styles.shopText}>Go Shopping</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {topBar}

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: insets.bottom + 90 },
        ]}
        ListHeaderComponent={
          <View style={styles.searchWrap}>
            <View style={styles.searchPill}>
              <Ionicons name="search" size={18} color="#5c4634" />
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="search by brands"
                placeholderTextColor="#f3e6d4"
                style={styles.searchInput}
              />
              <Ionicons name="camera-outline" size={16} color="#5c4634" />
              <Ionicons
                name="mic-outline"
                size={16}
                color="#5c4634"
                style={{ marginLeft: 8 }}
              />
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="options-outline" size={20} color="#2a221d" />
            </TouchableOpacity>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptySearch}>No items match your search</Text>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.9}
            onPress={() =>
              router.push({
                pathname: '/product' as never,
                params: {
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  price: String(item.price),
                  category: 'Hair Care',
                  rating: '4.5',
                },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.cardBody}>
              <Text style={styles.name} numberOfLines={2}>
                {item.name}
              </Text>
              <Text style={styles.category}>Hair Care</Text>
              <View style={styles.bottomRow}>
                <Text style={styles.price}>₹{item.price.toFixed(2)}</Text>
                <View style={styles.qtyRow}>
                  <Text style={styles.qtyText}>Qty:</Text>
                  <View style={styles.qtyBox}>
                    <TouchableOpacity
                      onPress={() => decreaseQty(item.id)}
                      style={styles.qtyBtn}
                    >
                      <Ionicons name="remove" size={12} color="#111" />
                    </TouchableOpacity>
                    <Text style={styles.qtyValue}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => increaseQty(item.id)}
                      style={styles.qtyBtn}
                    >
                      <Ionicons name="add" size={12} color="#111" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1410',
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 14,
    backgroundColor: '#1f1813',
    borderBottomWidth: 1,
    borderBottomColor: '#9b7a5c',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  headerTitle: {
    color: '#f2efea',
    fontSize: 18,
    fontWeight: '700',
  },

  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
  },

  searchPill: {
    flex: 1,
    height: 44,
    borderRadius: 11,
    backgroundColor: '#c59a6d',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  searchInput: {
    flex: 1,
    color: '#f4ebdf',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 8,
    paddingVertical: 0,
  },

  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 11,
    backgroundColor: '#c59a6d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  listContent: {
    paddingHorizontal: 16,
  },

  card: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 8,
  },

  image: {
    width: 84,
    height: 84,
    borderRadius: 13,
    marginRight: 14,
    backgroundColor: '#3d342c',
  },

  cardBody: {
    flex: 1,
    minHeight: 84,
  },

  name: {
    color: '#c59a6d',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },

  category: {
    color: '#f3f2ef',
    fontSize: 14,
    marginTop: 1,
  },

  price: {
    color: '#c59a6d',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 4,
  },

  bottomRow: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  qtyText: {
    color: '#c59a6d',
    fontSize: 13,
    marginRight: 8,
  },

  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  qtyBtn: {
    width: 21,
    height: 21,
    borderRadius: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    minWidth: 20,
    textAlign: 'center',
  },

  emptySearch: {
    color: '#888',
    textAlign: 'center',
    marginTop: 32,
    fontSize: 14,
  },

  emptyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  emptyText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },

  shopBtn: {
    marginTop: 20,
    backgroundColor: '#f6c27c',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  shopText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
