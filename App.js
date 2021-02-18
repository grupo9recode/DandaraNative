import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';
import Produtos from './views/Produtos';
import Serviços from './views/Serviços';
import Minhaconta from './views/Minhaconta';
import Cadastro from './views/Cadastro';


export default function App() {

  const Stack = createStackNavigator();

  return (

      <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Produtos" component={Produtos} />
      <Stack.Screen name="Serviços" component={Serviços} />
      <Stack.Screen name="Minhaconta" component={Minhaconta} />
      <Stack.Screen name="Cadastro" component={Cadastro}/>
            
            
            
    </Stack.Navigator>
  </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
