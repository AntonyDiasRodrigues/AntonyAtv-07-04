import {View, StyleSheet ,TextInput, Text, TextStyle, StyleProp } from "react-native"

type MeuCampoTextoProps = {
    label:string
    placeholder: string
    style:StyleProp<TextStyle>;
};

const MeuCampoTexto = ({placeholder, label, style}: MeuCampoTextoProps) => {
    return(
        <View >
            <Text style = {[estilo.Text , style]}>{label}</Text>
            <TextInput
            placeholder ={placeholder}
            />
        </View>
    )

}

const estilo = StyleSheet.create({
    Text: {
        color: "black"
    }

    
})


export default MeuCampoTexto