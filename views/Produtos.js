import React from 'react';
import {SafeAreaView, Text, StyleSheet, Image,TouchableOpacity, View} from 'react-native';
import Inicio from './Home';

export default function Produtos (props)
{
    return( 

        
        <SafeAreaView style={styles.container2}>
        
        <Text style={styles.textops1}>
            PRODUTOS
        </Text>
         <Image source={require('../assets/roupas.jpg')} style={styles.logo2}/>
         <View style={styles.container3}>
        <Text style={styles.textops}>
            BRECHÓ DA FULANA
        </Text>
        <Text style={styles.textops}>
            Roupas a partir de R$10,00
           
        </Text>
        <Text style={styles.textops}>
            
            Endereço: hauhsausha ,7
           
        </Text>
        <Text style={styles.textops}>
            
            Telefone: xxxxx-xxxx
        </Text>

        </View>

        <Image source={require('../assets/bolo.jpg')} style={styles.logo2}/>
         <View style={styles.container3}>
        <Text style={styles.textops}>
            BOLO NO POTE
        </Text>
        <Text style={styles.textops}>
            A partir de R$5,00
           
        </Text>
        <Text style={styles.textops}>
            
            Endereço: hauhsausha ,7
           
        </Text>
        <Text style={styles.textops}>
            
            Telefone: xxxxx-xxxx
        </Text>

        </View>

        
        <TouchableOpacity title= 'Sair' onPress={()=> props.navigation.navigate('Home')} style={styles.botoo} >
        <Text style={styles.login__buttonText}>SAIR</Text>
        </TouchableOpacity>
        </SafeAreaView>
      
    )
}

const styles = StyleSheet.create({
    container2: {
      width:'100%',
      height:'100%',
      backgroundColor: '#C06764',
      
    },

    logo2: {
        marginTop: 40,
        width: 150,
        height: 150,
        borderRadius: 60,
        marginLeft: 130,
        justifyContent: 'center',
       
    },
    textops1:{
        fontWeight:"bold",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 33,
        marginLeft: 130,
        color: "white"
    
    },

    textops:{
        fontWeight:"bold",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        paddingTop: 3,
        marginLeft: 90,
        
    },
    container3: {
        width:'80%',
        height: 90,
        backgroundColor: '#ffff',
        marginTop: 20,
        marginLeft: 40,
        borderRadius: 60,
        
      },

      position: {
        backgroundColor: '#ffff',
        borderRadius: 10,
        alignSelf:"center",
        padding: 7,
        marginBottom: 15,
        fontWeight:"bold",
        width:'70%',
    
       
    },

 botoo: {
        alignSelf:"center",
         backgroundColor: '#ffff',
         width:'40%',
         height: 20,      
        alignSelf:"center",
        padding: 15,        
        fontWeight:"bold",
        color: '#000000',
        borderRadius: 10,
        marginTop: 20,
    },
   
    login__buttonText: {
        marginTop: -13,
        alignSelf:"center",
    fontWeight:"bold",
    fontSize: 22,
    }
    
});