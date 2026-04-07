import { Image, StyleProp, StyleSheet, TextStyle, View } from "react-native"

type MeuCabecalhoProps = {
    img: string
    
}


const MeuCabecalho = ({img}: MeuCabecalhoProps) => {
    return(
        <View style={estilo.container}>
            <Image style ={[estilo.Imagem]} source ={{uri:img}}/>
        </View>
    );
};

// const estilo = StyleSheet.create({

    // Imagem: {
    //     width: 120,
    //     height:120,
    //     backgroundColor:"black",
    //     justifyContent:"center",
    //     alignItems:"baseline"

        
    // },
    // container:{
    //     width: "100%"
    //     backgroundColor: '#12195f',
    //     flex: 1, 
    //     justifyContent:"center",
    //     alignItems:"center"
        
    // }
    const estilo = StyleSheet.create({
    container: {
        width: "100%", 
        backgroundColor: '#12195f',
        height: 200, // Altura fixa para o cabeçalho
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40, // Espaço para a barra de status
    },
    Imagem: {
        width: 100,
        height: 100,
        borderRadius: 50, // Deixa a imagem redonda
    },
})


export default MeuCabecalho