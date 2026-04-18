import { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCart } from '../context/CartContext';

function oneParam(v: string | string[] | undefined): string {
  if (v == null) return '';
  return Array.isArray(v) ? v[0] : v;
}

export default function CartBagScreen() {
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{
    id?: string | string[];
    name?: string | string[];
    image?: string | string[];
    price?: string | string[];
    category?: string | string[];
  }>();
  const { cartItems, addToCart, increaseQty, decreaseQty } = useCart();

  const product = useMemo(() => {
    const price = Number(oneParam(params.price) || '0');
    return {
      id: oneParam(params.id) || '',
      name: oneParam(params.name) || 'Product',
      image: oneParam(params.image) || '',
      price: Number.isFinite(price) ? price : 0,
      category: oneParam(params.category) || 'Hair Care',
    };
  }, [params]);

  const cartLine = useMemo(
    () => cartItems.find((i: { id: string }) => i.id === product.id),
    [cartItems, product.id]
  );

  const quantity = cartLine?.quantity ?? 1;
  const rowTotal = product.price * quantity;

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

  if (!product.id) {
    return (
      <View style={styles.container}>
        {topBar}
        <View style={styles.emptyWrapper}>
          <Ionicons name="bag-handle-outline" size={72} color="#888" />
          <Text style={styles.emptyText}>No product selected</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.shopBtn}>
            <Text style={styles.shopText}>Go back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const onDecrease = () => {
    if (cartLine) {
      decreaseQty(product.id);
      return;
    }
  };

  const onIncrease = () => {
    if (cartLine) {
      increaseQty(product.id);
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
      category: product.category,
    });
  };

  return (
    <View style={styles.container}>
      {topBar}

      <View style={styles.innerWrap}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <View style={styles.itemTopRow}>
              <Image source={{ uri: product.image }} style={styles.image} />

              <View style={styles.cardBody}>
                <Text style={styles.name} numberOfLines={2}>
                  {product.name}
                </Text>
                <Text style={styles.category}>{product.category}</Text>
                <View style={styles.qtyRowWrap}>
                  <View style={styles.qtyRow}>
                    <Text style={styles.qtyText}>Qty:</Text>
                    <TouchableOpacity
                      onPress={onDecrease}
                      style={styles.qtyBtn}
                      disabled={!cartLine}
                    >
                      <Ionicons name="remove" size={12} color="#111" />
                    </TouchableOpacity>
                    <Text style={styles.qtyValue}>{quantity}</Text>
                    <TouchableOpacity onPress={onIncrease} style={styles.qtyBtn}>
                      <Ionicons name="add" size={12} color="#111" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Price For One:</Text>
              <Text style={styles.infoValue}>₹{product.price.toFixed(2)}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Quantity</Text>
              <Text style={styles.infoValue}>{quantity}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>₹{rowTotal.toFixed(2)}</Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={[
            styles.checkoutBar,
            {
              paddingTop: 20,
              paddingBottom: Math.max(insets.bottom, 14),
            },
          ]}
        >
          <View style={styles.bottomTotalRow}>
            <Text style={styles.bottomTotalLabel}>Total Price</Text>
            <Text style={styles.bottomTotalValue}>₹{rowTotal.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn} activeOpacity={0.9}>
            <Text style={styles.checkoutText}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
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

  innerWrap: {
    flex: 1,
    marginHorizontal: 18,
    marginTop: 12,
    marginBottom: 16,
    borderRadius: 36,
    borderWidth: 1.2,
    borderColor: '#b88a5d',
    backgroundColor: '#1d1713',
    overflow: 'hidden',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 8,
    flexGrow: 1,
  },

  card: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3a2f26',
  },

  itemTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  image: {
    width: 86,
    height: 86,
    borderRadius: 13,
    marginRight: 14,
    backgroundColor: '#3d342c',
  },

  cardBody: {
    flex: 1,
    minHeight: 86,
    justifyContent: 'center',
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
    marginTop: 4,
  },

  qtyRowWrap: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },

  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  qtyText: {
    color: '#c59a6d',
    fontSize: 14,
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
    color: '#f3f2ef',
    fontSize: 16,
    fontWeight: '600',
    minWidth: 12,
    textAlign: 'center',
  },

  infoRow: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoLabel: {
    color: '#f4eee8',
    fontSize: 14,
  },

  infoValue: {
    color: '#c59a6d',
    fontSize: 14,
  },

  divider: {
    marginTop: 8,
    marginBottom: 8,
    height: 1,
    backgroundColor: '#6d5b4c',
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    color: '#f6f1ec',
    fontSize: 14,
    fontWeight: '700',
  },

  totalValue: {
    color: '#c59a6d',
    fontSize: 16,
    fontWeight: '600',
  },

  checkoutBar: {
    paddingHorizontal: 14,
  },

  bottomTotalRow: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bottomTotalLabel: {
    color: '#f6f1ec',
    fontSize: 15,
    fontWeight: '700',
  },

  bottomTotalValue: {
    color: '#c59a6d',
    fontSize: 18,
    fontWeight: '700',
  },

  checkoutBtn: {
    alignSelf: 'center',
    minWidth: 172,
    paddingVertical: 7,
    paddingHorizontal: 22,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b88a5d',
  },

  checkoutText: {
    color: '#f7f2ed',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
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
