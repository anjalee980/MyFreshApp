import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 10,
    paddingHorizontal: 18,
    backgroundColor: '#1a1410',
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
});
