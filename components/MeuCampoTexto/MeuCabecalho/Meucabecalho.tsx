import { Image, StyleSheet, View } from "react-native"

type MeuCabecalhoProps = {
    img: string
}


const MeuCabelho = ({img}: MeuCabecalhoProps) => {
    return(
        <View style={estilo.container}>

            <Image style ={[estilo.Imagem]}     source ={{uri:img}}/>
        </View>
    );
};

const estilo = StyleSheet.create({

    Imagem: {
        width: 100,
        height:100,
        
    },
    container:{
        width: 400,
        backgroundColor: '#12195f',
        flex: 1, 
        justifyContent:"center",
        alignItems:"center"
        
    }

})

export default MeuCabelho