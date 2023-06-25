import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,Platform,SafeAreaView,StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

export default function Rose({ navigation }) {
   
  return (
    <View style={{flex:1}}>
    <SafeAreaView style = {styles.droidSafeArea} />
     <ImageBackground source={require('../assets/backg.jpg')} style={{height:screenheight,width:screenwidth}} >
    <ScrollView style={{ flex: 1,height:screenheight }}>
    <TouchableOpacity onPress={()=>navigation.navigate('BottomTab')} style={{margin:20}}>
    <AntDesign name="leftcircleo" size={30} color="black" /> 
    </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: 'bold',alignSelf:'center'}}>Bamboo</Text>
        <Image source={require('../assets/bamboo.png')} style={{width:screenwidth,height:200, margin : 10}} resizeMode='contain'></Image> 
        <Text style={{fontSize:15,textAlign:'center',color:'grey',borderRadius:20, padding:20,borderWidth:2}}> It is believed that keeping bamboo plants at home and in the office, brings good luck, wealth and fortune. Over a period of time, bamboo plants have been modified, for keeping it indoor as a houseplant. Today, bamboo plants are available in different sizes and varieties – from small size ‘friendship plants’, where logs of bamboos are stacked together and tied with a red ribbon and placed in glass vase filled with stones, pebbles and water, to the larger ones with long height and thick stems and leaves. </Text>
  <View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <View >
  <Text style={{fontSize:15,fontWeight:'bold',padding:5}}>Water</Text>
  <Text style={{backgroundColor:'lightblue',borderRadius:30,width:100,padding:5}}>Once a day </Text>
  </View>

   <View >
  <Text style={{fontSize:15,fontWeight:'bold',padding:5}}>Illumination</Text>
  <Text style={{backgroundColor:'lightblue',borderRadius:30,width:200,padding:5}}>room temperature</Text>
  </View>


  </View>

  <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
  <View >
  <Text style={{fontSize:15,fontWeight:'bold',padding:5}}>Temperature</Text>
  <Text style={{backgroundColor:'lightblue',borderRadius:30,width:100,padding:5}}>room </Text>
  </View>

   <View >
  <Text style={{fontSize:15,fontWeight:'bold',padding:5}}>Fertilizers</Text>
  <Text style={{backgroundColor:'lightblue',borderRadius:30,width:200,padding:5}}>Once in 4 weeks</Text>
  </View>


  </View>





    </ScrollView>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    padding: 10,
    width: screenwidth,
    height: screenheight + 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'forestgreen',
    padding: 10,
    marginTop: screenwidth / 3,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forget: {
    padding: 1,
    textAlign: 'center',
    alignItems: 'baseline',
    color: 'forestgreen',
  },
  forgetText: {
    color: 'forestgreen',
  },
   secure: {
     marginLeft: -50,
     marginRight: 24,
     marginTop: 10,
   },
   droidSafeArea: {
     
    marginTop: Platform.OS == "android" ? StatusBar.setHidden(true) : RFValue(0)

},
});
