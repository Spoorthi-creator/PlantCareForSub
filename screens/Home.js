import React, { useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, Dimensions, StyleSheet, Alert,StatusBar,Platform,SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import db from '../config';
import firebase from 'firebase';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

export default function Home({ navigation }) {
  const [name, setName] = useState('');
  const emailId=firebase.auth().currentUser.email;
  useEffect(()=>
  {
    getUserDetails();
  });

  const getUserDetails=()=> {
    db.collection('users')
      .where('email', '==', emailId)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
         setName(doc.data().name);
        
        })
      }) 
  }

  const logout=()=>{
    firebase.auth().signOut().then(() => {
  Alert.alert('You are successfully logged out.')
  navigation.navigate('Welcome')
}).catch((error) => {
  Alert.alert('Something went wrong. Could you please try again later.')
});
  }

  return (
     <View style={{flex:1}}>
       <SafeAreaView style = {styles.droidSafeArea} />
      <ImageBackground source={require('../assets/backg.jpg')} style={styles.backgroundImage} >
      <View style = {{flexDirection : 'row', justifyContent : 'space-between', marginTop:70,marginLeft:10}}>
        <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 25 }}>
          Hi, {name}!
        </Text>
         <TouchableOpacity onPress={logout}  style={{marginRight:20,width:40, height:40,alignItems:'center',backgroundColor:'green',borderRadius:100,borderWidth:2,justifyContent:'center'}}>
      
        <AntDesign name="logout" size={24} color="white" />
        </TouchableOpacity>
        </View>


        <ScrollView>

          <View style={{ flexDirection: 'row', padding: 10,marginTop:10,justifyContent:'space-between' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Rose')}>
            <View style={{height:180, backgroundColor:'#edeae5',borderRadius:30,width:160,}}>
             <Text style={styles.roseText}>Rose</Text>
              <View style={styles.rosebg}>
                <Image source={require('../assets/rose.png')} style={styles.image} />
                <Text style={{fontSize:15,alignSelf:'center'}}>₹ 300</Text>
              </View>
             
            </View>
            </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('MoneyPlant')}>
            <View style={{height:180, backgroundColor:'#edeae5',borderRadius:30,width:160,}} >
              <Text style={styles.roseText}>Money Plant</Text>
              <View style={styles.rosebg}>
                <Image source={require('../assets/moneyplant.png')} style={styles.image} />
                <Text style={{fontSize:15,alignSelf:'center'}}>₹ 299</Text>
              </View>
            
            </View>
            </TouchableOpacity> 
          </View>
          
         
            <View style={{ flexDirection: 'row', padding: 10,marginTop:10,justifyContent:'space-between' }}>
            <TouchableOpacity onPress={()=>navigation.navigate('PeaceLily')}>
            <View style={{height:180, backgroundColor:'#edeae5',borderRadius:30,width:160,}}>
             <Text style={styles.roseText}>Peace Lily</Text>
              <View style={styles.rosebg}>
                <Image source={require('../assets/peacelily.png')} style={styles.image} />
                <Text style={{fontSize:15,alignSelf:'center'}}>₹ 250</Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Bamboo')}>
            <View style={{height:180, backgroundColor:'#edeae5',borderRadius:30,width:160,}}>
              <Text style={styles.roseText}>Bamboo</Text>
              <View style={styles.rosebg}>
                <Image source={require('../assets/bamboo.png')} style={styles.image} />
                <Text style={{fontSize:15,alignSelf:'center'}}>₹ 400</Text>
              </View>
             </View>
             </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', padding: 10,marginTop:10,justifyContent:'space-between' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Basil')}>
            <View style={{height:180, backgroundColor:'#edeae5',borderRadius:30,width:160,}}>
             <Text style={styles.roseText}>Basil</Text>
              <View style={styles.rosebg}>
                <Image source={require('../assets/basil.png')} style={styles.image} />
                <Text style={{fontSize:15,alignSelf:'center'}}>₹ 225</Text>
              </View>
             
            </View>
            </TouchableOpacity> 

            <TouchableOpacity onPress={()=>navigation.navigate('Hibiscus')}>
            <View style={{height:180, backgroundColor:'#edeae5',borderRadius:30,width:160,}}>
              <Text style={styles.roseText}>Hibiscus</Text>
              <View style={styles.rosebg}>
                <Image source={require('../assets/hibiscus.png')} style={styles.image} />
                <Text style={{fontSize:15,alignSelf:'center'}}>₹ 375</Text>
              </View>           
            </View>
            </TouchableOpacity> 
          </View>

          <View style={{ flexDirection: 'row', padding: 10,marginTop:10,justifyContent:'space-between' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Tulip')}>
            <View style={{height:180, backgroundColor:'#edeae5',borderRadius:30,width:160,}}>
             <Text style={styles.roseText}>Tulip</Text>
              <View style={styles.rosebg}>
                <Image source={require('../assets/tulip.png')} style={styles.image} />
                <Text style={{fontSize:15,alignSelf:'center'}}>₹ 480</Text>
              </View>            
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Jade')}>
            <View style={{height:180, backgroundColor:'#edeae5',borderRadius:30,width:160,}}>
              <Text style={styles.roseText}>Jade</Text>
              <View style={styles.rosebg}>
                <Image source={require('../assets/jade.png')} style={styles.image} />
                <Text style={{fontSize:15,alignSelf:'center'}}>₹ 350</Text>
              </View>
            
            </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', padding: 10,marginTop:10,justifyContent:'space-between' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Aloevera')}>
            <View style={{height:180, backgroundColor:'#edeae5',borderRadius:30,width:160,}}>
             <Text style={styles.roseText}>Aloe vera</Text>
              <View style={styles.rosebg}>
                <Image source={require('../assets/aloevera.png')} style={styles.image} />
                <Text style={{fontSize:15,alignSelf:'center'}}>₹ 295</Text>
              </View>            
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Periwinkle')}>
            <View style={{height:180, backgroundColor:'#edeae5',borderRadius:30,width:160,}}>
              <Text style={styles.roseText}>Periwinkle</Text>
              <View style={styles.rosebg}>
                <Image source={require('../assets/periwinkle.png')} style={styles.image} />
                <Text style={{fontSize:15,alignSelf:'center'}}>₹ 210</Text>
              </View>
            
            </View>
            </TouchableOpacity>
          </View>

          
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    padding: 1,
    width: screenwidth,
    height: screenheight,
   
  },
  image: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    //margin: '5%',
  },
  rosebg: {
    height: 150,
    width: 130,
    borderRadius: 8,
    alignSelf:'center',
    shadowRadius: 10,
    shadowColor: 'gray',
    resizeMode:'cover'
  },
  roseText: {
    fontWeight: 'bold',
    width: 120,
    color: 'black',
    alignSelf:'flex-start',
    marginTop:7,
    marginLeft:20,
  },
  lotusbg: {
    backgroundColor: '#d4f3cc',
    height: 150,
    width: 130,
    borderRadius: 8,
    marginTop: screenwidth/5,
    marginLeft: '25%',
    shadowRadius: 10,
    shadowColor: 'gray',
  },
  lotusText: {
    fontWeight: 'bold',
    width: 50,
    color: 'black',
    marginLeft: '25%',
  },
  marigoldbg: {
    backgroundColor: '#d4f3cc',
    height: 150,
    width: 130,
    borderRadius: 8,
    marginTop: screenwidth/55,
    marginLeft: '15%',
    shadowRadius: 10,
    shadowColor: 'gray',
  },
  marigoldText: {
    fontWeight: 'bold',
    width: 120,
    color: 'black',
    marginLeft: '25%',
  },
  lilybg: {
    backgroundColor: '#d4f3cc',
    height: 150,
    width: 130,
    borderRadius: 8,
    marginTop: screenwidth/55,
    marginLeft: '25%',
    shadowRadius: 10,
    shadowColor: 'gray',
  },
  lilyText: {
    fontWeight: 'bold',
    width: 120,
    color: 'black',
    marginLeft: '25%',
  },
  droidSafeArea: {
     
    marginTop: Platform.OS == "android" ? StatusBar.setHidden(true) : RFValue(0)

},
});