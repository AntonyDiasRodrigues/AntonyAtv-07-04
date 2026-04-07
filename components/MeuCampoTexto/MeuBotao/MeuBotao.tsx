import {Button, StyleSheet } from "react-native"

type MeuBotaoProps = {
    title: string
}

const Botao = ({title}: MeuBotaoProps) =>{
    return(
        <Button  title={title} onPress={() => alert ("Clicado")} />
        
    )
}


const estilo = StyleSheet.create({
    button: {
        backgroundColor: "cian"

    }
})





export default Botao