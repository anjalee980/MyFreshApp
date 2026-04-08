import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../../context/CartContext';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import Header from '../../components/Header';

export default function CartScreen() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.emptyWrapper}>
          <Ionicons name="cart-outline" size={80} color="#555" />
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
      <Header />
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 160 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={{ flex: 1 }}>
              <View style={styles.row}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Ionicons name="trash-outline" size={18} color="#C59A6D" />
                </TouchableOpacity>
              </View>

              <Text style={styles.price}>${item.price}</Text>

              <View style={styles.qtyRow}>
                <Text style={styles.qty}>Qty:</Text>

                <TouchableOpacity onPress={() => decreaseQty(item.id)}>
                  <Text style={styles.btn}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qty}>{item.quantity}</Text>

                <TouchableOpacity onPress={() => increaseQty(item.id)}>
                  <Text style={styles.btn}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.footerWrapper}>
        <BlurView intensity={50} tint="dark" style={styles.footer}>
          <View style={styles.footerRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalPrice}>
              ${totalPrice.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1410',
    // padding: 15,
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#2a221d',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },

  name: {
    color: '#fff',
    fontSize: 16,
  },

  price: {
    color: '#C59A6D',
    marginTop: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  qty: {
    color: '#aaa',
    marginHorizontal: 6,
  },

  btn: {
    color: '#C59A6D',
    fontSize: 18,
    marginHorizontal: 10,
  },

  emptyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },

  shopBtn: {
    marginTop: 20,
    backgroundColor: '#C59A6D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  shopText: {
    color: '#000',
    fontWeight: 'bold',
  },

  footerWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
  },

  footer: {
    borderRadius: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(197,154,109,0.3)',
    overflow: 'hidden',
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  totalLabel: {
    color: '#aaa',
    fontSize: 14,
  },

  totalPrice: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  checkoutBtn: {
    backgroundColor: '#C59A6D',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  checkoutText: {
    color: '#000',
    fontWeight: 'bold',
  },
});