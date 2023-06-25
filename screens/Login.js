import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,SafeAreaView,StatusBar,Platform
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import db from '../config';
import firebase from 'firebase';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  logIn = async() => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        Alert.alert('You are logged in!');
        navigation.navigate('BottomTab');
      })
      .catch((error) => {
        var errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  }

   changeSecureTextEntry = () => {
     setSecureTextEntry(!secureTextEntry);
   }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
       <SafeAreaView style = {styles.droidSafeArea} />
      <ImageBackground source={require('../assets/login1.jpg')} style={styles.backgroundImage}>
        <Text style={{ marginTop: screenwidth / 1.4, fontSize: 20, fontWeight: 'bold' }}>Welcome back.</Text>
        <Text>Enter your registered email id and password.</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ borderWidth: 1, padding: 10, marginTop: screenwidth / 5, width: 250 }}
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

        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forget}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={logIn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.forget}>
          <Text style={styles.forgetText}>New user? Register here.</Text>
        </TouchableOpacity>
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
    marginTop: 40,
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

     alignSelf:'flex-end',
    // marginLeft: -50,
    // marginRight: 24,
    // marginTop: 10,
   },
   droidSafeArea: {
     
    marginTop: Platform.OS == "android" ? StatusBar.setHidden(true) : RFValue(0)

},
});
