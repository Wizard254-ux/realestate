import React, { useState,useEffect } from 'react';
import { 
  View, 
  Text, 
  Pressable,
  Image, 
  StyleSheet, 
  Dimensions, 
  ScrollView ,
  TextInput,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Search } from 'lucide-react-native';


const { width } = Dimensions.get('window');
import FilterComponent from './Filter';



const Properties = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const OriginalList= [
    {
        "id": 24,
        "title": "Estate",
        "rent": 22.0,
        "buy": 44.0,
        "location": "Mombasa",
        "type": "Tower",
        "bedrooms": 3,
        "bathrooms": 3,
        "area": 34.0,
        "description": "Its new",
        "images_read": [
            {
                "id": 55,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/Screenshot_69.png"
            },
            {
                "id": 56,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/Screenshot_70.png"
            },
            {
                "id": 57,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/Screenshot_105.png"
            }
        ]
    },
    {
        "id": 25,
        "title": "Estate",
        "rent": 20.0,
        "buy": 43.0,
        "location": "Nairobi",
        "type": "Two Floor Tower",
        "bedrooms": 5,
        "bathrooms": 3,
        "area": 20.0,
        "description": "2022 build",
        "images_read": [
            {
                "id": 58,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/Screenshot_798.png"
            },
            {
                "id": 59,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/Screenshot_799.png"
            }
        ]
    },
    {
        "id": 26,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    }
    ,
    {
        "id": 27,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    }
    ,
    {
        "id": 28,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    }
    ,
    {
        "id": 29,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    }
    ,
    {
        "id": 30,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    },
    
    {
        "id": 31,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    }
  ]
  const [PropertyList,setPropertyList]=useState(
  [
    {
        "id": 24,
        "title": "Estate",
        "rent": 22.0,
        "buy": 44.0,
        "location": "Mombasa",
        "type": "Tower",
        "bedrooms": 3,
        "bathrooms": 3,
        "area": 34.0,
        "description": "Its new",
        "images_read": [
            {
                "id": 55,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/Screenshot_69.png"
            },
            {
                "id": 56,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/Screenshot_70.png"
            },
            {
                "id": 57,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/Screenshot_105.png"
            }
        ]
    },
    {
        "id": 25,
        "title": "Estate",
        "rent": 20.0,
        "buy": 43.0,
        "location": "Nairobi",
        "type": "Two Floor Tower",
        "bedrooms": 5,
        "bathrooms": 3,
        "area": 20.0,
        "description": "2022 build",
        "images_read": [
            {
                "id": 58,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/Screenshot_798.png"
            },
            {
                "id": 59,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/Screenshot_799.png"
            }
        ]
    },
    {
        "id": 26,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    }
    ,
    {
        "id": 27,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    }
    ,
    {
        "id": 28,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    }
    ,
    {
        "id": 29,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    }
    ,
    {
        "id": 30,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    },
    
    {
        "id": 31,
        "title": "Estate",
        "rent": 100.0,
        "buy": 500.0,
        "location": "Machakos",
        "type": "Villa",
        "bedrooms": 5,
        "bathrooms": 5,
        "area": 567.0,
        "description": "Its New",
        "images_read": [
            {
                "id": 60,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-03-20.png"
            },
            {
                "id": 61,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-04-29.png"
            },
            {
                "id": 62,
                "image": "https://alpha001.pythonanywhere.com/media/property_images/2024-05-23.png"
            }
        ]
    }
  ])

  const handlePress = (item) => {
    navigation.navigate('PropertyDetail', { property: item });
  }



  return (
    <SafeAreaView style={{flex:1}} >
        <StatusBar barStyle={"dark-content"} backgroundColor={'black'}/>

            <View style={{
      flexDirection: 'row', 
      alignItems: 'center', 
      backgroundColor: '#F3F4F6', 
      borderRadius: 8,
      paddingHorizontal: 16,
      marginHorizontal: 16,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2
    }}>
      <Search color="#6B7280" size={20} style={{ marginRight: 8 }} />
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#9CA3AF"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={{ 
            flex: 1, 
            color: '#1F2937', 
            fontSize: 16 
        }}
      />
    </View>
<FilterComponent OriginalList={OriginalList} PropertyList={PropertyList} setPropertyList={setPropertyList} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {PropertyList.map((item) => (
        <View style={styles.card} key={item.id}>
          <Pressable onPress={() => handlePress(item)}>
            <View>
              <Image 
                source={{ uri: item.images_read[currentImageIndex].image }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </Pressable>
     
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{item.title}</Text>
            
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Location</Text>
                <Text style={styles.infoValue}>{item.location}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Type:</Text>
                <Text style={styles.infoValue}>{item.type}</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Rent:</Text>
                <Text style={styles.priceValue}>${item.rent}/month</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
    width: width / 2 - 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  infoContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 2,
  },
  infoRow: {
    flexDirection: 'row',
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#666',
    flex: 1,
  },
  infoValue: {
    color: '#333',
    flex: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 2,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 5,
    borderRadius: 5,
  },
  priceLabel: {
    fontWeight: 'bold',
    color: '#666',
    marginRight: 5,
  },
  priceValue: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default Properties;