import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import Rose from '../screens/rose'
import PeaceLily from '../screens/peacelily'
import Hibiscus from '../screens/hibiscus'
import Basil from '../screens/basil'
import Bamboo from '../screens/bamboo'
import Tulip from '../screens/tulip'
import MoneyPlant from '../screens/moneyplant' 
import Aloevera from '../screens/aloevera'
import Jade from '../screens/jade'
import Periwinkle from '../screens/periwinkle'
import Order from '../screens/Order'
import OrderList from '../screens/OrderList'
import BottomTab from '../navigations/BottomTab'
import Login from '../screens/Login'
import Registration from '../screens/Resigtration'
import ForgetPassword from '../screens/ForgetPassword'

import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator()
function MyStack(){
  return(
    <Stack.Navigator>
   <Stack.Screen name = "Welcome" component = {Welcome} options = {{headerShown:false}}/>
    <Stack.Screen name = "Order" component = {Order} options = {{headerShown:false}}/>
    <Stack.Screen name = "OrderList" component = {OrderList} options = {{headerShown:false}}/>
    <Stack.Screen name = "Home" component = {Home} options = {{headerShown:false}}/>
    <Stack.Screen name = "Rose" component = {Rose} options = {{headerShown:false}}/>
    <Stack.Screen name = "PeaceLily" component = {PeaceLily} options = {{headerShown:false}}/>
    <Stack.Screen name = "Hibiscus" component = {Hibiscus} options = {{headerShown:false}}/>
    <Stack.Screen name = "Basil" component = {Basil} options = {{headerShown:false}}/>
    <Stack.Screen name = "Bamboo" component = {Bamboo} options = {{headerShown:false}}/>
    <Stack.Screen name = "Tulip" component = {Tulip} options = {{headerShown:false}}/>
    <Stack.Screen name = "MoneyPlant" component = {MoneyPlant} options = {{headerShown:false}}/>
    <Stack.Screen name = "Aloevera" component = {Aloevera} options = {{headerShown:false}}/>
    <Stack.Screen name = "Jade" component = {Jade} options = {{headerShown:false}}/>
    <Stack.Screen name = "Periwinkle" component = {Periwinkle} options = {{headerShown:false}}/>
     <Stack.Screen name = "Login" component = {Login} options = {{headerShown:false}}/>
     <Stack.Screen name = "Registration" component = {Registration} options = {{headerShown:false}}/>
      <Stack.Screen name = "BottomTab" component = {BottomTab} options = {{headerShown:false}}/>
      <Stack.Screen name = "ForgetPassword" component = {ForgetPassword} options = {{headerShown:false}}/>
    </Stack.Navigator>
    
  )
}
export default MyStack