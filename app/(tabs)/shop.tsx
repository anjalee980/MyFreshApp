import { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCart } from '../../context/CartContext';

type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  rating: number;
  category: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Aloe Vera Facemask',
    subtitle: 'Hydrating & Cooling',
    price: 24,
    rating: 4.5,
    category: 'skin',
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
  },
  {
    id: '2',
    name: 'Anti Aging Serum',
    subtitle: 'Youthful Glow',
    price: 48,
    rating: 4.5,
    category: 'skin',
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
  },
  {
    id: '3',
    name: 'Hair Repair Oil',
    subtitle: 'Deep Nourish',
    price: 30,
    rating: 4.5,
    category: 'hair',
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
  },
  {
    id: '4',
    name: 'Body Lotion',
    subtitle: 'Silk Smooth',
    price: 36,
    rating: 4.4,
    category: 'body',
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
  },
  {
    id: '5',
    name: 'Rose Mist',
    subtitle: 'Fresh & Light',
    price: 22,
    rating: 4.6,
    category: 'fragrance',
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
  },
  {
    id: '6',
    name: 'Vitamin C Cream',
    subtitle: 'Brightening',
    price: 42,
    rating: 4.5,
    category: 'skin',
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'skin', label: 'Skin' },
  { key: 'hair', label: 'Hair' },
  { key: 'body', label: 'Body' },
  { key: 'fragrance', label: 'Fragrance' },
] as const;

const CATEGORY_CART_LABEL: Record<string, string> = {
  skin: 'Skin Care',
  hair: 'Hair Care',
  body: 'Body Care',
  fragrance: 'Fragrance',
};

export default function Shop() {
  const insets = useSafeAreaInsets();
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');
  const [categoryKey, setCategoryKey] = useState<string>('all');
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat =
        categoryKey === 'all' || p.category === categoryKey;
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, categoryKey]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const listHeader = (
    <>
      <View style={styles.searchRow}>
        <View style={styles.searchPill}>
          <Ionicons name="search" size={18} color="#4a3f35" />
          <TextInput
            placeholder="search by brands"
            placeholderTextColor="#6b5d4f"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
          <View style={styles.searchIconsRight}>
            <TouchableOpacity hitSlop={8}>
              <Ionicons name="camera-outline" size={18} color="#4a3f35" />
            </TouchableOpacity>
            <TouchableOpacity hitSlop={8} style={{ marginLeft: 10 }}>
              <Ionicons name="mic-outline" size={18} color="#4a3f35" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.85}>
          <Ionicons name="options-outline" size={20} color="#2a221d" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryRow}
      >
        {CATEGORIES.map((c) => {
          const active = categoryKey === c.key;
          return (
            <TouchableOpacity
              key={c.key}
              onPress={() => setCategoryKey(c.key)}
              style={[styles.categoryPill, active && styles.categoryPillActive]}
              activeOpacity={0.85}
            >
              <Text
                style={[
                  styles.categoryPillText,
                  active && styles.categoryPillTextActive,
                ]}
              >
                {c.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.topBar, { paddingTop: Math.max(insets.top, 12) }]}>
        <View style={styles.side}>
          <TouchableOpacity
            onPress={() => router.back()}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>Products</Text>

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

      <View style={styles.divider} />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={listHeader}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: insets.bottom + 100 },
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardImageWrap}>
              <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.cardWishlist}
                onPress={() => toggleWishlist(item.id)}
                hitSlop={8}
              >
                <Ionicons
                  name={wishlist[item.id] ? 'heart' : 'heart-outline'}
                  size={14}
                  color={wishlist[item.id] ? '#e74c3c' : '#1a1410'}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.cardName} numberOfLines={2}>
              {item.name}
            </Text>
            <View style={styles.cardMetaRow}>
              <Text style={styles.cardSubtitle} numberOfLines={1}>
                {item.subtitle}
              </Text>
              <View style={styles.ratingWrap}>
                <Ionicons name="star" size={12} color="#C59A6D" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardPrice}>₹{item.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.addCartBtn}
                onPress={() =>
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                    category:
                      CATEGORY_CART_LABEL[item.category] || 'Personal Care',
                  })
                }
              >
                <Ionicons name="cart-outline" size={18} color="#2a221d" />
              </TouchableOpacity>
            </View>
          </View>
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

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 12,
  },

  side: {
    flex: 1,
    justifyContent: 'center',
  },

  sideRight: {
    alignItems: 'flex-end',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  divider: {
    height: 1,
    backgroundColor: '#C59A6D',
    marginHorizontal: 16,
    opacity: 0.9,
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 10,
  },

  searchPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(197, 154, 109, 0.42)',
    borderRadius: 28,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#2a221d',
    fontSize: 14,
    paddingVertical: 0,
  },

  searchIconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#C59A6D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryRow: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  categoryPill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    marginRight: 10,
  },

  categoryPillActive: {
    backgroundColor: '#d8d4cf',
    borderColor: '#d8d4cf',
  },

  categoryPillText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  categoryPillTextActive: {
    color: '#1a1410',
    fontWeight: '600',
  },

  listContent: {
    paddingHorizontal: 12,
  },

  gridRow: {
    justifyContent: 'space-between',
    marginBottom: 14,
    paddingHorizontal: 4,
    gap: 12,
  },

  card: {
    flex: 1,
    maxWidth: '48%',
    backgroundColor: '#2a221d',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 0,
  },

  cardImageWrap: {
    position: 'relative',
    marginBottom: 8,
  },

  cardImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: '#3d342c',
  },

  cardWishlist: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    minHeight: 36,
  },

  cardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    gap: 6,
  },

  cardSubtitle: {
    flex: 1,
    color: '#9a8f86',
    fontSize: 11,
  },

  ratingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  ratingText: {
    color: '#C59A6D',
    fontSize: 11,
    fontWeight: '600',
  },

  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  cardPrice: {
    color: '#C59A6D',
    fontSize: 16,
    fontWeight: '700',
  },

  addCartBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C59A6D',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
