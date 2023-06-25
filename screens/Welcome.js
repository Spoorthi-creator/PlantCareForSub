import React from 'react'
import {Text, View, Image, ImageBackground, TouchableOpacity, Dimensions,SafeAreaView,StatusBar,Platform,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;
export default class Welcome extends React.Component{
  render(){
    return(
      <View style = {{flex:1,height:screenheight,width:screenwidth}}>
         <SafeAreaView style = {styles.droidSafeArea} />
      <ImageBackground source = {require('../assets/screen.jpg')} style = {{width : screenwidth, height : screenheight+28}}>
      <Text style = {{marginTop : 100, alignSelf : 'flex-end', color : 'black', fontWight : 'bold', fontSize : 35 }}>PLANT n CARE.</Text>
      <Text style = {{marginTop : 1, alignSelf : 'flex-end', color : 'black', fontSize : 20,marginRight:5}}>A Hobby to Cherish!</Text>
      <TouchableOpacity style={{ alignSelf:'flex-end', color: "white", fontWeight: "bold",marginTop:screenheight/1.5,marginRight:20,
      }}
      onPress={() => { this.props.navigation.navigate("Login"); }} > 
      <AntDesign name="rightcircle" size={40} color="black" />
      </TouchableOpacity>
      </ImageBackground>
      </View>
    )
  }
}const styles = StyleSheet.create({
 

  
   droidSafeArea: {
     
    marginTop: Platform.OS == "android" ? StatusBar.setHidden(true) : RFValue(0)

},
});