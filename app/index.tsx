import Botao from "@/components/MeuCampoTexto/MeuBotao/MeuBotao"
import MeuCabelho from "@/components/MeuCampoTexto/MeuCabecalho/Meucabecalho"
import MeuCampoTexto from "@/components/MeuCampoTexto/MeuCampoTexto"
import { StyleSheet, View } from "react-native"

const APP =  () =>  {
return(
    <>
    <View>
    <MeuCabelho img="https://reactnative.dev/img/tiny_logo.png"/>
    
    <View style={estilo.teste}>
        <MeuCampoTexto label="Email" placeholder="Digite seu Email" style ={{backgroundColor:"orange"}} />

    <MeuCampoTexto label="Senha" placeholder="Digite sua Senha" style ={{}}/>

    <Botao title="Clica aqui" />
    </View>
    </View>
    
    </>
)
}


const estilo = StyleSheet.create({
teste:{
    flex:1,
    backgroundColor:"gray",
    justifyContent:"center",
    alignItems:"center",
    height: '100%',


}

})




export default APP