import React, { useState,useEffect } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Linking,SafeAreaView,StatusBar,StyleSheet
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import firebase from 'firebase';
import db from '../config';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

export default function Order({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pincode, setPincode] = useState('');
  const [contact, setContact] = useState('');
  const [deliveryaddress, setDeliveryaddress] = useState('');
  const [quantity, setQuantity] = useState('');
  const [plantdetails, setPlantdetails] = useState('');
  const[currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {   var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    const datee = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[datee.getDay()];
    setCurrentDateTime( currentDay + " "+ date + '-' + month + '-' + year);

  }, []);


   const addData = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        await db.collection(user.email).add({
          userId: user.uid,
          email: email,
          name: name,
          pincode: pincode,
          contact: contact,
          deliveryaddress: deliveryaddress,
          quantity: quantity,
          plantdetails: plantdetails,
          //date:currentDateTime,
        });

        Linking.openURL('mailto:saeesakpal38@gmail.com?subject=Interested&body=I am interested in buying plants from your nursery');
    

      console.log('Order placed successfully!');
        alert('Request submitted successfully!');
       // navigation.navigate('OrderList');
      } else {
        console.log('User not found.');
      }
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
       <SafeAreaView style = {styles.droidSafeArea} />
      <KeyboardAwareScrollView
         
          style={{
            width: '100%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: '100%',
          }}
        >
        <Image
          source={require('../assets/plant1.png')}
          style={{
            backgroundColor: '#fcfcfc',
            width: screenwidth,
            height: screenheight/3,
            alignSelf: 'center',
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#8cc640',
            resizeMode : 'contain'
          }}
        />
        
       
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialIcons name="person" size={20} color="#8cc640" />
            <TextInput
              style={{
                width: '90%',
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: '#8cc640',
              }}
              placeholder="Your Name"
              placeholderTextColor="#8cc640"
              onChangeText={(val) => {
                setName(val);
              }}
            />
          </View>

            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="email" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 30,
                  borderBottomWidth: 1,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                }}
                placeholder="Email-Id"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  setEmail(val);
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons name="phone" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 30,
                  borderBottomWidth: 1,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                }}
                placeholder="Contact No"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  setContact(val);
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name="address-book" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                  borderBottomWidth: 1,
                }}
                placeholder="PinCode"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  setPincode(val);
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name="home" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                  borderBottomWidth: 1,
                }}
                placeholder="Delivery Address"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  setDeliveryaddress(val);
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo name="address" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                  borderBottomWidth: 1,
                }}
                placeholder="Quantity"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  setQuantity( val );
                }}
                value = {quantity}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons name="details" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                  borderBottomWidth: 1,
                }}
                placeholder="Plant Details"
                placeholderTextColor="#8cc640"
                multiline={true}
                numberOfLines={20}
                onChangeText={(val) => {
                  setPlantdetails(val);
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'forestgreen',
                width: '50%',
                height: 40,
                marginTop: '5%',
                borderRadius: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                if (
                  name &&
                  email &&
                  contact &&
                  pincode &&
                  deliveryaddress &&
                  quantity &&
                  plantdetails
                ) {
                  addData();
                }
                else{
                  alert("Please fill in all the fields")
                }
              }}>
              <Text style={{ fontSize: 18, color: 'white' }}>Submit</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
      </View>
  
    );
  }


  const styles = StyleSheet.create({
 
  
 
     droidSafeArea: {
       
      marginTop: Platform.OS == "android" ? StatusBar.setHidden(true) : RFValue(0)
  
  },
  });
  