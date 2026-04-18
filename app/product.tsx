import { useMemo, useState } from 'react';
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

const SIZE_OPTIONS = ['250 ml', '400 ml', '600 ml', '650 ml', '850 ml', '1000 ml'];

export default function ProductScreen() {
  const insets = useSafeAreaInsets();
  const { addToCart } = useCart();
  const params = useLocalSearchParams<{
    id?: string;
    name?: string;
    image?: string;
    price?: string;
    category?: string;
    rating?: string;
  }>();

  const [selectedSize, setSelectedSize] = useState('250 ml');
  const [liked, setLiked] = useState(false);

  const product = useMemo(() => {
    const price = Number(params.price ?? '0');
    return {
      id: params.id ?? '0',
      name: params.name ?? 'Product',
      image: params.image ?? '',
      price: Number.isFinite(price) ? price : 0,
      category: params.category ?? 'Hair Care',
      rating: params.rating ?? '4.5',
    };
  }, [params]);

  return (
    <View style={styles.screen}>
      <View style={[styles.topBar, { paddingTop: Math.max(insets.top, 12) }]}>
        <TouchableOpacity onPress={() => router.back()} hitSlop={12}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity hitSlop={12}>
          <Ionicons name="share-social-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardShell}>
          <View style={styles.imageWrap}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <TouchableOpacity
              style={styles.heart}
              onPress={() => setLiked((prev) => !prev)}
            >
              <Ionicons
                name={liked ? 'heart' : 'heart-outline'}
                size={17}
                color={liked ? '#ff1f1f' : '#b9b0a7'}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.category}>{product.category}</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={14} color="#c59a6d" />
              <Text style={styles.ratingText}>{product.rating}</Text>
            </View>
          </View>

          <Text style={styles.name}>{product.name}</Text>

          <Text style={styles.sectionTitle}>Select Size</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sizesWrap}
          >
            {SIZE_OPTIONS.map((size) => {
              const active = selectedSize === size;
              return (
                <TouchableOpacity
                  key={size}
                  style={[styles.sizeChip, active && styles.sizeChipActive]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text style={[styles.sizeText, active && styles.sizeTextActive]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <Text style={styles.sectionTitle}>Product Details</Text>
          <Text style={styles.details}>
            Moisture-rich shampoo that keeps hair smooth, soft, and frizz-free.
          </Text>

          <View style={styles.footer}>
            <View>
              <Text style={styles.totalLabel}>Total Price</Text>
              <Text style={styles.totalPrice}>₹{product.price.toFixed(0)}</Text>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.iconBtn}
                onPress={() =>
                  router.push({
                    pathname: '/cart-bag',
                    params: {
                      id: product.id,
                      name: product.name,
                      image: product.image,
                      price: String(product.price),
                      category: product.category,
                    },
                  })
                }
              >
                <Ionicons name="bag-handle-outline" size={20} color="#1d1713" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconBtn}
                onPress={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    category: product.category,
                  })
                }
              >
                <Ionicons name="cart-outline" size={20} color="#1d1713" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#15110e',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomColor: '#9b7a5c',
    borderBottomWidth: 1,
  },
  content: {
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  cardShell: {
    borderRadius: 28,
    borderColor: '#b98f63',
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#1b1511',
  },
  imageWrap: {
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 1.18,
    backgroundColor: '#2a211a',
  },
  heart: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f3f2ef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  metaRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    color: '#ece7e1',
    fontSize: 18,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    color: '#c59a6d',
    fontWeight: '700',
    fontSize: 14,
  },
  name: {
    color: '#c59a6d',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 2,
  },
  sectionTitle: {
    color: '#f3efe9',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
  },
  sizesWrap: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 4,
  },
  sizeChip: {
    borderWidth: 1,
    borderColor: '#b98f63',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
  },
  sizeChipActive: {
    backgroundColor: '#b98f63',
  },
  sizeText: {
    color: '#f4efe8',
    fontSize: 11,
  },
  sizeTextActive: {
    color: '#1d1713',
    fontWeight: '700',
  },
  details: {
    marginTop: 8,
    color: '#8f8881',
    fontSize: 11,
    lineHeight: 16,
  },
  footer: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#b98f63',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalLabel: {
    color: '#d8d1ca',
    fontSize: 11,
  },
  totalPrice: {
    color: '#c59a6d',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c59a6d',
  },
});
