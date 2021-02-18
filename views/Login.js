import React from 'react';
import {Text, TextInput, StyleSheet, Image, TouchableOpacity, View, KeyboardAvoidingView} from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './Minhaconta';


export default function login (props)
{
    return( 

        
        < KeyboardAvoidingView contentContainerStyle={styles.box} behavior="position" enabled style={styles.container2}>
         <Image source={require('../assets/favela.png')} style={styles.logo}/>
       < KeyboardAvoidingView>
         <Text style={styles.textops1}>
            FAÇA O LOGIN
        </Text></ KeyboardAvoidingView>
                    <TextInput type='email-address' placeholder='Digite o seu email' style={styles.position} />
                   
                    <TextInput type='password' placeholder='Digite o sua Senha' style={styles.position} />
               
            
        <TouchableOpacity title= 'Login' onPress={()=> props.navigation.navigate('Minhaconta')} style={styles.botoo} >
        <Text style={styles.login__buttonText}>Entrar</Text>
        </TouchableOpacity>
        </ KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container2: {
      width:'100%',
      height:'100%',
      backgroundColor: '#C06764',
      
    },

    logo: {
        marginTop: 70,
        width:300,
        height: 300,
        borderRadius: 100,
        marginLeft: 55,
        justifyContent: 'center',
    },

    position: {
        backgroundColor: '#ffff',
        borderRadius: 10,
        alignSelf:"center",
        padding: 9,
        marginBottom: 19,
        fontWeight:"bold",
        width:'70%',
    
       
    },

 botoo: {
        alignSelf:"center",
         backgroundColor: '#ffff',
         width:'40%',
         height: 20,      
        alignSelf:"center",
        padding: 35,        
        fontWeight:"bold",
        color: '#000000',
        borderRadius: 10,
    },
   
    login__buttonText: {
        marginTop: -13,
        alignSelf:"center",
    fontWeight:"bold",
    fontSize: 22,
    },
   
    textops1: {
        fontWeight:"bold",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 33,
        marginLeft: 100,
        color: "white",
        margin: 10,
    
    },
});