import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppBar from './components/AppBar';
import Home from './components/Home';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: "center"}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="Profile"
          component={Profile}
          options={{
            headerLeft: () => null,
          }}
        />
      </Stack.Navigator>

      <AppBar />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
