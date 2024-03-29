import React, { Component } from "react";
import { Text,TextInput,TouchableOpacity, View } from "react-native-web";
export default class Registro extends Component{
        render(){
            return(
            <View>
                <Text>registro</Text>

                <TextInput>Nombre del granjero</TextInput>
                <TextInput>¿Qué se siembra en su granja?</TextInput>
                <TextInput>¿De qué país y ciudad es la granja?</TextInput>
                <TextInput>Usuario</TextInput>
                <TextInput>Contraseña</TextInput>
                <TouchableOpacity><Text>Enviar</Text></TouchableOpacity>
                
            </View>
            )
        }
    
}