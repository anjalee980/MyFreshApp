import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import { useCart } from '../../context/CartContext';
import Header from '../../components/Header';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1410',
    paddingHorizontal: 10,
    paddingVertical: 5
  },






  

  



  bannerContainer: {
    position: 'relative',
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 5
  },

  banner: {
    width: '100%',
    height: 220
  },

  overlay: {
    position: 'absolute',
    top: '40%',
    left: 15,
    width: '70%'
  },

  bannerTextWhite: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 32
  },

  bannerTextGold: {
    color: '#C59A6D',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
    lineHeight: 32
  },

  buttonRow: {
    flexDirection: 'row',
    marginTop: 15
  },

  primaryButton: {
    flex: 1,
    backgroundColor: '#C59A6D',
    paddingVertical: 8,
    borderRadius: 14,
    alignItems: 'center',
    marginRight: 10
  },

  primaryText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14
  },

  secondaryButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C59A6D',
    backgroundColor: 'transparent'
  },

  secondaryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },

  sectionHeader: {
    marginTop: 25,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  viewAll: {
    color: '#C59A6D',
    fontSize: 14,
    fontWeight: '600'
  },

  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 5
  },

  categoryItem: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2
  },

  iconCircle: {
    width: 75,
    height: 75,
    borderRadius: 19,
    borderWidth: 0.3,
    borderColor: '#C59A6D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    backgroundColor: 'rgba(197, 154, 109, 0.15)'
  },

  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500'
  },

  cardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
        marginBottom: 10,
    marginHorizontal: 5
  },

  card: {
    width: '48%',
    backgroundColor: '#2a221d',
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
    alignItems: 'flex-start',
    padding: 10
  },

  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 12
  },

  cardText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5
  },

  cardSubText: {
    color: '#a89b9b',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2
  },

  newCard: {
    width: '48%',
    backgroundColor: '#2a221d',
    borderRadius: 20,
    marginBottom: 25,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  newCardText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '400',
    marginTop: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2
  },

bottomNav: {
  position: 'absolute',
  bottom: 15,
  left: 15,
  right: 15,
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingVertical: 10,
  borderRadius: 35,
  borderWidth: 1,
  borderColor: 'rgba(197,154,109,0.3)',
overflow: 'visible',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 8
},
tabItem: {
  alignItems: 'center',
  justifyContent: 'center',
  height: 50
},
  priceRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 8,
  width: '100%'
},

price: {
  color: '#C59A6D',
  fontSize: 16,
  fontWeight: 'bold'
},

cartIcon: {
  backgroundColor: '#C59A6D',
  width: 30,
  height: 30,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  
},
ordersIcon: {
  position: 'absolute',
    color: '#C59A6D',
  top: -25
},
iconWrapper: {
  height: 24,
  justifyContent: 'center',
  alignItems: 'center'
},
profileCircle: {
  width: 38,
  height: 38,
  borderRadius: 18,
  borderWidth: 0.5,
  borderColor: '#C59A6D',
  justifyContent: 'center',
  alignItems: 'center'
},

profileInnerBg: {
  width: 25,
  height: 25,
  borderRadius: 11,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(197, 154, 109, 0.15)'
}
});  