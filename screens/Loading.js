import React from 'react'
import {Text, View, StyleSheet,SafeAreaView,StatusBar,Platform} from 'react-native'
import firebase from 'firebase'
export default class Loading extends React.Component{
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    navigation.navigate("BottomTab");
    var uid = user.uid;
  } else {
    navigation.navigate("Welcome");
  }
});
  }

render() {
    return (
      <View style={styles.container}>
         <SafeAreaView style = {styles.droidSafeArea} />
        <Text
          style={{
            marginTop: 150,
            alignSelf: 'center',
            fontSize: 25,
            color: '#E79F25',
            fontWeight: 'bold',
          }}>
          Loading .....
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  droidSafeArea: {
     
    marginTop: Platform.OS == "android" ? StatusBar.setHidden(true) : RFValue(0)

},
});
