import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,SafeAreaView,StatusBar,Platform
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
        <Text style={{ marginTop : 2, fontSize: 30, fontWeight: 'bold',alignSelf:'center'}}>Periwinkle</Text>
        <Image source={require('../assets/periwinkle.png')} style={{width:screenwidth,height:200, margin : 10}} resizeMode='contain'></Image> 
        <Text style={{fontSize:15,textAlign:'center',color:'grey',borderRadius:20, padding:20,borderWidth:2}}>Leave no ground uncovered with the mighty periwinkle! This vigorous trailing plant can easily tackle any tricky shady situation and happily cover your planting space. Its glossy evergreen leaves and cheerful blue star-like flowers can really brighten up a shady corner in your garden. They appear  in colors like blue, pink, white. With its vigorous sprawling habit, periwinkle can easily colonize any area.</Text>
  <View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <View >
  <Text style={{fontSize:15,fontWeight:'bold',padding:5}}>Water</Text>
  <Text style={{backgroundColor:'lightblue',borderRadius:30,width:100,padding:5}}>Once a week </Text>
  </View>

   <View >
  <Text style={{fontSize:15,fontWeight:'bold',padding:5}}>Illumination</Text>
  <Text style={{backgroundColor:'lightblue',borderRadius:30,width:200,padding:5}}>Full shade OR Full sun.</Text>
  </View>
</View>

  <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
  <View >
  <Text style={{fontSize:15,fontWeight:'bold',padding:5}}>Temperature</Text>
  <Text style={{backgroundColor:'lightblue',borderRadius:30,width:100,padding:5}}>75F </Text>
  </View>

   <View >
  <Text style={{fontSize:15,fontWeight:'bold',padding:5}}>Fertilizers</Text>
  <Text style={{backgroundColor:'lightblue',borderRadius:30,width:200,padding:5}}>Once in 2 weeks in 10-10-10 proportion.</Text>
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
