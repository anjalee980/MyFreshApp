import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

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