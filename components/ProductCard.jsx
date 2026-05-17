import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  price: {
    marginTop: 5,
    fontSize: 16,
  },
});