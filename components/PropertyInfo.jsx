import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity, 
  ScrollView,
  Pressable
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

const PropertyCard = ({route,navigation}) => {
    const {property}=route.params
    console.log(property)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 



  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % property.images_read.length
    );
  };

  return (
    <View style={styles.card}>
         <Pressable style={styles.button} onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="#ffffff" />
    </Pressable>
      {/* Image Carousel */}
      <TouchableOpacity onPress={nextImage}>
        <Image 
          source={{ uri: property.images_read[currentImageIndex].image }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>

      {/* Image Indicator */}
      <View style={styles.imageIndicator}>
        {property.images_read.map((_, index) => (
          <View 
            key={index}
            style={[
              styles.dot,
              currentImageIndex === index && styles.activeDot
            ]}
          />
        ))}
      </View>

      {/* Property Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{property.title}</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>{property.location}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Type:</Text>
          <Text style={styles.infoValue}>{property.type}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Bedrooms:</Text>
          <Text style={styles.infoValue}>{property.bedrooms}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Bathrooms:</Text>
          <Text style={styles.infoValue}>{property.bathrooms}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Area:</Text>
          <Text style={styles.infoValue}>{property.area} sq m</Text>
        </View>

        <Text style={styles.description}>{property.description}</Text>

        <View style={styles.priceContainer}>
          <View style={styles.priceBox}>
            <Text style={styles.priceLabel}>Rent</Text>
            <Text style={styles.price}>${property.rent.toFixed(2)}</Text>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.priceLabel}>Buy</Text>
            <Text style={styles.price}>${property.buy.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 250,
  },
  imageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#007BFF',
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    color: '#666',
  },
  infoValue: {
    color: '#333',
  },
  description: {
    marginTop: 10,
    color: '#666',
    fontStyle: 'italic',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  priceBox: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%',
  },
  priceLabel: {
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'tomato',
    borderRadius: 8,
    width:50,
    position:'absolute',
    zIndex:100000,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default PropertyCard;

// Usage Example
// <PropertyCard property={propertyData} />