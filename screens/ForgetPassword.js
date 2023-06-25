import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,Platform,SafeAreaView,StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import db from '../config';
import firebase from 'firebase';
const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;
export default function ForgetPassword({navigation}) {
  const [email, setEmail] = useState('');

  async function forgetpassword(){
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    Alert.alert('Email sent. Please do also check your spam');
  })
  .catch((error) => {
    var errorMessage = error.message;
    Alert.alert(error.message);
  });
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
      <SafeAreaView style = {styles.droidSafeArea} />
      <ImageBackground source={require('../assets/login1.jpg')}
      style={styles.backgroundImage}>

        <Text style ={{marginTop :  screenwidth/1.4, fontSize : 20, fontWeight : 'bold'}}>Forget Password</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ borderWidth: 1, padding: 10, marginTop: screenwidth/5, width: 200 }}
        />

        <Text> Enter your register email id.</Text>

        <TouchableOpacity style={styles.button} onPress={forgetpassword}>
          <Text style={styles.buttonText}>Send email</Text>
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
    padding :10,
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
  droidSafeArea: {
     
    marginTop: Platform.OS == "android" ? StatusBar.setHidden(true) : RFValue(0)

},
});
