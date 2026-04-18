import { styles } from './HomeScreen.styles';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import { useCart } from '../../../context/CartContext';
import Header from '../../../components/Header';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Home');
  const [showToast, setShowToast] = useState(false);
  const { cartItems, addToCart } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
     <View style={{ flex: 1, backgroundColor: '#1a1410', position: 'relative' }}>
      <Header />
     
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
        
        

      

        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg' }}
            style={styles.banner}
          />

          <View style={styles.overlay}>
            <Text style={styles.bannerTextWhite}>Skincare That's</Text>
            <Text style={styles.bannerTextGold}>Naturally Clean</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/shop')}>
                <Text style={styles.primaryText}>Our Products</Text>
              </TouchableOpacity>

         <TouchableOpacity
  onPress={() => router.push('/about')}
  style={{ flex: 1, marginLeft: 5 }}
>
  <BlurView
    intensity={20}   
    tint="dark"      
    style={{
      paddingVertical: 8,
      borderRadius: 14,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#C59A6D',
      overflow: 'hidden',
      backgroundColor: 'transparent', 
    }}
  >
    <Text style={styles.secondaryText}>Learn More</Text>
  </BlurView>
</TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Categories</Text>
          <TouchableOpacity onPress={() => router.push('/categories')}>
  <Text style={styles.viewAll}>View All</Text>
</TouchableOpacity>
        </View>

        <View style={styles.categoriesRow}>
          <View style={styles.categoryItem}>
          <TouchableOpacity
  style={styles.categoryItem}
  onPress={() => router.push('/shop?category=skincare')}
>
  <View style={styles.iconCircle}>
    <Ionicons name="leaf-outline" size={22} color="#C59A6D" />
  </View>
  <Text style={styles.categoryText}>Skincare</Text>
</TouchableOpacity>
          </View>

          <View style={styles.categoryItem}>
            <TouchableOpacity
  style={styles.categoryItem}
  onPress={() => router.push('/shop?category=haircare')}
>
  <View style={styles.iconCircle}>
    <Ionicons name="cut-outline" size={22} color="#C59A6D" />
  </View>
  <Text style={styles.categoryText}>Haircare</Text>
</TouchableOpacity>
          </View>

          <View style={styles.categoryItem}>
         <TouchableOpacity
  style={styles.categoryItem}
  onPress={() => router.push('/shop?category=bodycare')}
>
  <View style={styles.iconCircle}>
    <Ionicons name="water-outline" size={22} color="#C59A6D" />
  </View>
  <Text style={styles.categoryText}>Bodycare</Text>
</TouchableOpacity>
          </View>

          <View style={styles.categoryItem}>
          <TouchableOpacity
  style={styles.categoryItem}
  onPress={() => router.push('/shop?category=hygiene')}
>
  <View style={styles.iconCircle}>
    <Ionicons name="sparkles-outline" size={22} color="#C59A6D" />
  </View>
  <Text style={styles.categoryText}>Hygiene</Text>
</TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <TouchableOpacity onPress={() => router.push('/shop')}>
  <Ionicons name="chevron-forward-outline" size={20} color="#C59A6D" />
</TouchableOpacity>
        </View>

        <View style={styles.cardsRow}>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Aelo Vera Facemask</Text>
            <Text style={styles.cardSubText}>Hydrating & Cooling</Text>
             <View style={styles.priceRow}>
    <Text style={styles.price}>$24.00</Text>

    <View style={styles.cartIcon}>
<TouchableOpacity
 onPress={() => {
  addToCart({
    id: '1',
    name: 'Aelo Vera Facemask',
    price: 24,
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
    quantity: 1,
  });

  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 1500);
}}
>
  <Ionicons name="cart-outline" size={18} color="#000" />
</TouchableOpacity>
    </View>
  </View>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Anti Aging Serum</Text>
            <Text style={styles.cardSubText}>Youthful Glow</Text>
                      <View style={styles.priceRow}>
    <Text style={styles.price}>$48.00</Text>

    <View style={styles.cartIcon}>
<TouchableOpacity
  onPress={() => {
  addToCart({
    id: '2',
    name: 'Anti Aging Serum',
    price: 48,
    image: 'https://bytespark-personal-care.vercel.app/products/hydralift_anti_aging_serum.jpg',
    quantity: 1,
  });

  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 1500);
}}
>
  <Ionicons name="cart-outline" size={18} color="#000" />
</TouchableOpacity>
    </View>
  </View>
          </View>
        </View>

        <View style={styles.cardsRow}>
          <View style={styles.newCard}>
            <Ionicons name="water-outline" size={28} color="#C59A6D" />
            <Text style={styles.newCardText}>DERMATOLOGICALLY{'\n'}TESTED</Text>
          </View>

          <View style={styles.newCard}>
            <Ionicons name="leaf-outline" size={28} color="#C59A6D" />
            <Text style={styles.newCardText}>100% ORGANIC{'\n'}INGREDIENTS</Text>
          </View>

          <View style={styles.newCard}>
            <Ionicons name="sparkles-outline" size={28} color="#C59A6D" />
            <Text style={styles.newCardText}>CRUELTY-FREE PRACTICE</Text>
          </View>

          <View style={styles.newCard}>
            <Ionicons name="sparkles-outline" size={28} color="#C59A6D" />
            <Text style={styles.newCardText}>SUSTAINABLE{'\n'}PACKAGING</Text>
          </View>
        </View>
      </ScrollView>

     {/* <BlurView
  intensity={50}
  tint="dark"
  style={styles.bottomNav}
>
{[
  { name: 'Home', icon: 'home-outline' },
  { name: 'Shop', icon: 'cart-outline' },
  { name: 'Orders', icon: 'receipt-outline' },
  { name: 'Cart', icon: 'bag-outline' },
  { name: 'Profile', icon: 'person-outline' }
].map((tab) => {
  const isOrders = tab.name === 'Orders';

  return (
    <TouchableOpacity
      key={tab.name}
      style={[
        styles.tabItem,
      ]}
      onPress={() => setActiveTab(tab.name)}
    >
<View style={styles.iconWrapper}>
  <Ionicons
    name={tab.icon}
    size={isOrders ? 28 : 24}
    color={activeTab === tab.name ? '#C59A6D' : '#fff'}
    style={isOrders && styles.ordersIcon}
  />
</View>
      <Text
        style={{
          color: activeTab === tab.name ? '#C59A6D' : '#fff',
          fontSize: 12,
          marginTop: 2
        }}
      >
        {tab.name.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
})}
</BlurView> */}
{showToast && (
  <View
    style={{
      position: 'absolute',
      bottom: 100,
      alignSelf: 'center',
      backgroundColor: '#C59A6D',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,

      zIndex: 999,        
      elevation: 10,      
    }}
  >
    <Text style={{ color: '#000', fontWeight: 'bold' }}>
      Added to Cart
    </Text>
  </View>
)}
    </View>
  );
}

