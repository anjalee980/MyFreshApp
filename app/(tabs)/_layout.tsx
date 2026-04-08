import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { BlurView } from 'expo-blur';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

     tabBarStyle: {
  position: 'absolute',
  bottom: 20,
  width: '90%',
  left: 0,
  right: 0,
  marginHorizontal: 20,
  alignSelf: 'center',
  height: 65,
  borderRadius: 30,
  backgroundColor: 'transparent', 
  borderWidth: 1,
  borderColor: 'rgba(197,154,109,0.3)',
  elevation: 10,
  paddingBottom: 5,
  paddingTop: 5,
  
 
},

tabBarBackground: () => (
  <BlurView
    intensity={0}
    tint="dark"
    style={{
      flex: 1,
      borderRadius: 30,
    }}
  />
),

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: '600',
          marginBottom: 2,
        },

        tabBarActiveTintColor: '#C59A6D',
        tabBarInactiveTintColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'HOME',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="shop"
        options={{
          title: 'SHOP',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: 'ORDERS',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
                borderWidth: 0.5,
                borderColor: '#C59A6D',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1a1410',
                marginTop: -50,
              }}
            >
              <Ionicons name="receipt-outline" size={24} color="#C59A6D" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'CART',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-outline" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'PROFILE',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}