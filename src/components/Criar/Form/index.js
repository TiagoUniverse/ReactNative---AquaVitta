import React, { useState } from "react"
import { View, Text } from "react-native"
import { Button, TextInput, StyleSheet } from "react-native";
import ResultImc from "./ResultImc";


export default function Form() {

    const [nomeRio, setNomeRio] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [potencialhidrogenico, setPotencialHidrogenico] = useState(null)
    const [oxigeniodissolvido, setOxigenioDissolvido] = useState(null)
    const [temperatura, setTemperatura] = useState(null)
    const [condutividade, setCondutividade] = useState(null)
    const [salinidade, setSalinidade] = useState(null)
    const [turbidez, setTurbidez] = useState(null)
    const [message, setmessage] = useState("Preencha as informações do ponto de rio")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Cadastrar")


    const cadastrarRio = () => {
        const endpoint = `https://aquavitta1.pythonanywhere.com/nalinha/0/${nomeRio}/${endereco}/${latitude}/${longitude}/${potencialhidrogenico}/${oxigeniodissolvido}/${temperatura}/${condutividade}/${salinidade}/${turbidez}`;
        console.log(endpoint)
        console.log(nomeRio)
        fetch(endpoint)
          .then(resposta => resposta.json())
            .catch(() => {
              Alert.alert('Erro', 'Não foi possível fazer o cadastro');
            });
      }

    function validationImc() {
        if (nomeRio != null && endereco != null && latitude != null && longitude != null) {
            cadastrarRio()
            setNomeRio(null)
            setEndereco(null)
            setLatitude(null)
            setLongitude(null)
            setTextButton("Cadastro finalizado")
            return
        }
        setImc(null)
        setTextButton("Cadastrar")
        setmessage("Preencha no mínimo as informações: Nome do ponto do rio, endereço, latitude e longitude")
    }

    return (
        <View>
            <Text style={styles.TextTitle}>Cadastrar um novo Rio</Text>
            <View style={styles.container}>
                <Text style={styles.Textt}>Nome do rio:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setNomeRio}
                    value={nomeRio}
                    // placeholder="Ex. 1.70"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>Endereço:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setEndereco}
                    value={endereco}
                    ////placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>Latitude:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setLatitude}
                    value={latitude}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>Longitude:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setLongitude}
                    value={longitude}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>Potencial hidrogênico:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setPotencialHidrogenico}
                    value={potencialhidrogenico}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>Oxigênio dissolvido:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setOxigenioDissolvido}
                    value={oxigeniodissolvido}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>Temperatura:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setTemperatura}
                    value={temperatura}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>condutividade:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setCondutividade}
                    value={condutividade}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>Salinidade:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setSalinidade}
                    value={salinidade}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>Turbidez:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setTurbidez}
                    value={turbidez}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Button
                    title={textButton}
                    onPress={() => validationImc()}
                />
            </View>

            <ResultImc messageResultImc={message} ResultImc={imc} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 1, 
      borderColor: '#d5d5d5', 
      borderRadius: 4, 
      marginBottom: 10, 
      marginHorizontal: 20, 
      padding: 10,
      backgroundColor: '#fafafa'
    },
    Textt:{
        fontSize: 15,
        color: '#363636'
    },
    TextInputt:{
        backgroundColor: '#DCDCDC',
        borderRadius: 4,
        marginBottom: 15,
    },
    TextTitle:{
        fontSize: 22, marginTop: 25, textAlign: 'center', color: 'black',
        backgroundColor: 'white' ,
        marginLeft: 110,
        marginRight: 110,
        borderRadius: 5
    }
})