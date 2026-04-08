import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Header from '../../components/Header';

export default function Shop() {
  const { category } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>Shop Screen</Text>

        <Text style={styles.category}>
          Category: {category || 'All'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1410',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 18,
  },

  category: {
    color: '#C59A6D',
    marginTop: 10,
  },
});