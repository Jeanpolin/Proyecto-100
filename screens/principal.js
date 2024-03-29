import React, { Component } from "react";
import { Text,TouchableOpacity, View } from "react-native-web";
export default class Principal extends Component{
    render(){
        return(
            <View>
                <Text>La ayuda de los granjeros</Text>
                <TouchableOpacity><Text>Formulario de la granja</Text></TouchableOpacity>
                <TouchableOpacity><Text>Formulario de las cosechas de la granja</Text></TouchableOpacity>
                <TouchableOpacity><Text>base de datos</Text></TouchableOpacity>
            </View>

        )
    }
}
