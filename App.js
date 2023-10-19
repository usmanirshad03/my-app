import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './App/Screen/Home';
import CategoryTextSlider from './App/Components/Home/CategoryTextSlider';
import CategorySlider from './App/Components/Home/CategorySlider';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './App/Navigation/HomeNavigator';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeNavigator/>
      </NavigationContainer>
      
      <Home/> 
      
      
     
      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   padding:20,
   fontSize:24,
   fontWeight:'bold'
  },
});
