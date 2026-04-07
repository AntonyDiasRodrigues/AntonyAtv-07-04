import Botao from "@/components/MeuCampoTexto/MeuBotao/MeuBotao"
import MeuCabecalho from "@/components/MeuCampoTexto/MeuCabecalho/Meucabecalho"
import MeuCampoTexto from "@/components/MeuCampoTexto/MeuCampoTexto"
import { StyleSheet, View } from "react-native"

const APP =  () =>  {
return(
    <>
    
    <MeuCabecalho img="https://reactnative.dev/img/tiny_logo.png"/>
    <View style={estilo.corpo}>
    <MeuCampoTexto label="Email" placeholder="Digite seu Email" style ={{backgroundColor:"orange", padding: 10, borderRadius:10, color:"white"}} />
    <MeuCampoTexto label="Senha" placeholder="Digite sua Senha" style ={{backgroundColor:"red", padding: 10, borderRadius:10, color:"white"}}/>
    <Botao title="Clica aqui" />
    </View>
    
    
    </>
)
}


const estilo = StyleSheet.create({
corpo:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height: "100%",
    gap:10,
    flexDirection:"column"


}

})




export default APP