import {Button, StyleProp, StyleSheet, TextStyle } from "react-native"

type MeuBotaoProps = {
    title: string
    style?:StyleProp<TextStyle>;
}

const Botao = ({title, style}: MeuBotaoProps) =>{
    return(
        <Button title={title}   onPress={() => alert ("Clicado")}  />
        
    )
}


const estilo = StyleSheet.create({
    button: {
        backgroundColor: "cian"
        

    }
})





export default Botao