import React, {useState,useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,SafeAreaView,StatusBar,Platform,StyleSheet,
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config';
import firebase from "firebase";
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

export default function OrderList({ navigation }) {
  const uid = firebase.auth().currentUser.uid;
  const[data,setData]=useState([]);
  useEffect(() => {
    getOrderDetails();
  }, []);

   
  function getOrderDetails() {
    
    db.collection(firebase.auth().currentUser.email).
    onSnapshot((snapshot) => {
          var plantOrders = [];
        snapshot.docs.map((doc) => {
           var culture = doc.data();
           culture.id=doc.id;
        
          plantOrders.push(culture);
        });
         setData(plantOrders)
      });
  }

   const emptylist=()=>{
    return(
      <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:screenheight/2.2}}>
<Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}} > No orders at the moment</Text>
</View>
    ) 
  }
   
  return (
      <View style={{flex:1, height:screenheight, width:screenwidth, alignContent:'center'}}>
         <SafeAreaView style = {styles.droidSafeArea} />
      <ImageBackground source={require('../assets/backg.jpg')} style={{width: screenwidth, height: screenheight}} > 
      <Text style = {{fontSize:30, fontWeight:'bold',marginTop:40,marginLeft:10}}>Your orders</Text>
             <FlatList 
             ListEmptyComponent={emptylist}
             scrollEnabled = {true}
            contentContainerStyle={{marginBottom:20}}
                        data = {data}
                        keyExtractor={(item, index)=>index.toString()}
                         renderItem = {({item}) =>   
            <View style = {{flex:1}}>   
            <View style={{backgroundColor:'green',width:'90%',marginLeft:10,marginRight:20,borderRadius:20,marginTop:10,flex:1}}>
      <View style = {{ 
        backgroundColor:'#f7fef2',borderRadius:10,marginLeft:20,padding:10,width:'95%',}}>
         
          <Text style = {{fontSize : RFValue(15), marginLeft : RFValue(5)}}>
          Name : {item.plantdetails}</Text>
          <Text style = {{fontSize : RFValue(15), marginLeft : RFValue(5)}}>
          Quantity : {item.quantity}</Text>     
      </View>
      </View>
            </View>}
           />
        </ImageBackground>
      </View>
      );
}
const styles=StyleSheet.create({
droidSafeArea: {
     
  marginTop: Platform.OS == "android" ? StatusBar.setHidden(true) : RFValue(0)

},
});