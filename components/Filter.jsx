import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Animated } from 'react-native';

const FilterComponent = ({searchQuery,setSearchQuery,setPropertyList,OriginalList,PropertyList}) => {
  const [amount, setAmount] = useState('');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [filterVisible,setFilterVisible]=useState(false)


  useEffect(()=>{
  console.log('amount ',amount)
  let copylist=OriginalList
   if(searchQuery!==''){
    copylist=copylist.filter((item)=>(
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
    ))
   }
  

  if(location!==''&&location!==null){
    if(location=='all'){
      copylist=OriginalList
    }else{
      copylist=copylist.filter((item)=>(
        item.location===location
      ))

    }
    
  }
    if(amount!=''&&amount!=null){
      if(amount[0]=='below'){
        copylist=copylist.filter((item)=>{    
            return item.rent<=parseInt(amount[1]) 
        })
      }
      if(amount[0]=='range'){
        const range=amount[1].split('_',2)
        const rangeStart = parseInt(range[0]); 
          const rangeEnd = parseInt(range[1]); 
        copylist=copylist.filter((item)=>{ 
            return (
              item.rent >= rangeStart &&  rangeEnd>=item.rent 
          );          
        })

      }
      if(amount[0]=='above'){ 
        copylist=OriginalList.filter((item)=>{
            return parseInt(amount[1])<=item.rent
        })
      }
    }
    setPropertyList(copylist)
  },[amount,location,searchQuery])


  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: filterVisible ? 1 : 0,
      duration: 300,  // Reduced duration for a smoother effect
      useNativeDriver: true,
    }).start();
  }, [filterVisible, fadeAnim]);

  return (
    <>
       <Pressable style={styles.button} onPress={()=>setFilterVisible(prev=>!prev)} >
        <Text style={styles.buttonText}>Filter</Text>
      </Pressable>
    <Animated.View style={[styles.container,{display:filterVisible?'flex':'none',opacity:fadeAnim}]}>
      {/* <Text style={styles.heading}>Filter Options</Text> */}
     <View >
      <RNPickerSelect
        onValueChange={(value) => setAmount(value)}
        items={[
          { label: 'Below $20', value: ['below','20'] },
          { label: '$20 - $99', value: ['range','20_99'] },
          { label: 'Above $100', value:['above','100'] },
        ]}
        placeholder={{ label: 'Amount (All)', value: 'all' }}
        style={pickerSelectStyles}
      />
      </View>
    
      <View >

      <RNPickerSelect
        onValueChange={(value) => setLocation(value)}
        items={[
          { label: 'Mombasa', value: 'Mombasa' },
          { label: 'Nairobi', value: 'Nairobi' },
          { label: 'Machakos', value: 'Machakos' },
        ]}
        placeholder={{ label: 'Location (All)', value: 'all' }}
        style={pickerSelectStyles}
      />
      </View>
      {/* <View >

      <RNPickerSelect
        onValueChange={(value) => setTitle(value)}
        items={[
          { label: 'Manager', value: 'manager' },
          { label: 'Developer', value: 'developer' },
          { label: 'Designer', value: 'designer' },
        ]}
        placeholder={{ label: 'Title', value: null }}
        style={pickerSelectStyles}
      />
      </View> */}

     
    </Animated.View>
    </>
  );
};

export default FilterComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
    
    
    // height:40
    // flexDirection:'row'
    
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 7,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal:'2%',
    marginBottom:8
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 3,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    marginBottom: 5,
    height:50,
    backgroundColor: '#f9f9f9',
  },
};
