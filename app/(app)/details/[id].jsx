import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';

import { products } from '../../../data/products';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Товар не знайдено</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.price}>{product.price}</Text>

      <Text style={styles.description}>
        {product.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 24,
    marginTop: 10,
  },

  description: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: 28,
  },
});