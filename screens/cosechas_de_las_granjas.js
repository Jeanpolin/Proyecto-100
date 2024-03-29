import React, { Component } from "react";
import { Text,TextInput,TouchableOpacity, View } from "react-native-web";
export default class Cosechas_de_las_granjas extends Component{
    render(){
        return(
            <View>
                <Text>La ayuda de los granjeros</Text>
                <Text>Formulario de las cosechas de la granja</Text>
                <TextInput>¿En qué cultivo se cosechó?</TextInput>
                <TextInput>¿Cuánto alimento se cosechó?</TextInput>
                <TouchableOpacity><Text>Formulario de la granja</Text></TouchableOpacity>
                <TouchableOpacity><Text>Formulario de las cosechas de la granja</Text></TouchableOpacity>
                <TouchableOpacity><Text>base de datos</Text></TouchableOpacity>
            </View>

        )
    }
}