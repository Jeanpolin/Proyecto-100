import React, { Component } from "react";
import { Text,TextInput,TouchableOpacity, View } from "react-native-web";
export default class Inicio extends Component{
    render(){
        return (
            <View>
            
            <Text>Bienvenido a la ayuda de los granjeros</Text>
            <TextInput>Usuario</TextInput>
            <TextInput>Contraseña</TextInput>

            <TouchableOpacity>
                <Text>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>registrarse</Text>
            </TouchableOpacity>

            </View>
        )
    }
} 