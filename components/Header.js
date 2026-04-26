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
           <View style={[styles.side, styles.sideRight]}>
          <TouchableOpacity
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            accessibilityRole="button"
            accessibilityLabel="Wishlist"
          >
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
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



  divider: {
    height: 1,
    backgroundColor: '#2a221d',
  },
});
