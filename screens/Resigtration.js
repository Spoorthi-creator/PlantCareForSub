import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, Dimensions, StyleSheet, Alert, TouchableOpacity
,Platform,StatusBar,SafeAreaView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import db from '../config';
import firebase from 'firebase';
const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;
export default function Registration({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  async function register (){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        Alert.alert('User Created!');
        db.collection("users").add({
          email: email,
          password: password,
          name: name,
          uid:firebase.auth().currentUser.uid
        });


        navigation.navigate('BottomTab');
      })
      .catch((error) => {
        var errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  }

  function changeSecureTextEntry(){
    setSecureTextEntry(!secureTextEntry);
  }

return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
     <SafeAreaView style = {styles.droidSafeArea} />
    <ImageBackground source={require('../assets/login1.jpg')} style={styles.backgroundImage}>
      <Text style={{marginTop :  screenwidth/1.4, fontSize: 20, fontWeight: 'bold' }}>Register</Text>
      <Text>Create your new account.</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={{ borderWidth: 1, padding: 10, marginTop : screenwidth/5, width: 250 }}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ borderWidth: 1, padding: 10, marginTop: 10, width: 250 }}
      />

      <View style={{ flexDirection: 'row',marginLeft:20 }}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={secureTextEntry}
            style={{ borderWidth: 1, padding: 10, marginTop: 10, width: 250 }}
          />
          <TouchableOpacity style={styles.secure} onPress={changeSecureTextEntry}>
             {secureTextEntry ? <Entypo name="eye-with-line" size={24} color="black" /> : <Entypo name="eye" size={24} color="black" />}
           </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.back}
      onPress={() => navigation.navigate("Login")} > 
       <AntDesign name="leftcircle" size={24} color="white" />
      </TouchableOpacity>
      
    </ImageBackground>
  </View>
);
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: screenwidth,
    height: screenheight+28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'forestgreen',
    padding: 10,
    marginTop: screenwidth/3,
    width: 200,
    alignItems: 'center'
  },
    buttonText: {
    color: 'white',
    fontSize: 16,
  },
  back :{
    position: 'absolute',
    top: 30,
    left: 10,
    padding: 10,
  },
  secure: {

     alignSelf:'flex-end',
    // marginLeft: -50,
    // marginRight: 24,
    // marginTop: 10,
   },
   droidSafeArea: {
     
    marginTop: Platform.OS == "android" ? StatusBar.setHidden(true) : RFValue(0)

},
});