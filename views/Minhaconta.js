import React from 'react';
import {SafeAreaView, Text, StyleSheet, Image,Button,TouchableOpacity} from 'react-native';


export default function Minhaconta (props)
{
    return( 

        
        <SafeAreaView style={styles.container2}>
        
        <Image source={require('../assets/lenco.png')} style={styles.logo}/>
        
        <TouchableOpacity title= 'Produtos' onPress={()=> props.navigation.navigate('Produtos')} style={styles.botoo} >
        <Text style={styles.login__buttonText}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity title= 'Serviços' onPress={()=> props.navigation.navigate('Serviços')} style={styles.botoo} >
        <Text style={styles.login__buttonText}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity title= 'Cadastrar Produto ou Serviço'  style={styles.botoo} >
        <Text style={styles.login__buttonText}>Cadastrar Produto ou Serviço</Text>
        </TouchableOpacity>


        <Button title= 'Editar Dados'/>
        
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
          marginBottom: 5,
          marginTop:45,
          
      },
     
      login__buttonText: {
          marginTop: -13,
          alignSelf:"center",
      fontWeight:"bold",
      fontSize: 22,
      }
    
});