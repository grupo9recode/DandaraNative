import React from 'react';
import {SafeAreaView, StyleSheet, Image,Button,TouchableOpacity, Text,Sidebar} from 'react-native';
import Login from './Login';
import Cadastro from './Cad';
import Produtos from './Produtos';
import Serviços from './Serviços';

export default function Inicio (props)
{
    return( 

        
        <SafeAreaView style={styles.container2}>
         <Image source={require('../assets/logo.png')} style={styles.logo}/>
        
        <TouchableOpacity title= 'Login' onPress={()=> props.navigation.navigate('Login')} style={styles.botoo} >
        <Text style={styles.login__buttonText}>Entrar</Text>
        </TouchableOpacity> 

        <TouchableOpacity title= 'Cadastro' onPress={()=> props.navigation.navigate('Cadastro')} style={styles.botoo} >
        <Text style={styles.login__buttonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity title= 'Produtos' onPress={()=> props.navigation.navigate('Produtos')} style={styles.botoo} >
        <Text style={styles.login__buttonText}>Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity title= 'Serviços' onPress={()=> props.navigation.navigate('Serviços')} style={styles.botoo} >
        <Text style={styles.login__buttonText}>Serviços</Text>
        </TouchableOpacity>

        <Button title= 'Saiba +' />
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container2: {
      width:'100%',
      height:'100%',
      backgroundColor: '#C06764',
      
    },

    logo: {
        marginTop: 20,
        width:400,
        height: 400,
        borderRadius: 100,
        marginLeft: 0,
        justifyContent: 'center',
    },

    botoo: {
        alignSelf:"center",
         backgroundColor: '#ffff',
         width:'80%',
         height: 20,      
        alignSelf:"center",
        padding: 15,        
        fontWeight:"bold",
        color: '#000000',
        borderRadius: 10,
        marginBottom: 25,
    },
   
    login__buttonText: {
        marginTop: -13,
        alignSelf:"center",
    fontWeight:"bold",
    fontSize: 22,
    }
   
    
});