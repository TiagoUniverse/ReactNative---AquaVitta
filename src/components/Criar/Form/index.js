import React, { useState } from "react"
import { View, Text, Button, TextInput } from "react-native"
import  ResultText from "./ResultText";


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

    function validation() {
        if (nomeRio != null && endereco != null && latitude != null && longitude != null) {
            cadastrarRio()
            setNomeRio(null)
            setEndereco(null)
            setLatitude(null)
            setLongitude(null)
            setTextButton("Cadastro finalizado")
            return
        }
        setTextButton("Cadastrar")
        setmessage("Preencha no mínimo as informações: Nome do ponto do rio, endereço, latitude e longitude")
    }

    return (
        <View>
            <View>
                <Text>Nome do rio:</Text>
                <TextInput
                    onChangeText={setNomeRio}
                    value={nomeRio}
                    // placeholder="Ex. 1.70"
                    KeyboardType="text"
                />

                <Text>Endereço:</Text>
                <TextInput
                    onChangeText={setEndereco}
                    value={endereco}
                    ////placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text>Latitude:</Text>
                <TextInput
                    onChangeText={setLatitude}
                    value={latitude}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text>Longitude:</Text>
                <TextInput
                    onChangeText={setLongitude}
                    value={longitude}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text>Potencial hidrogênico:</Text>
                <TextInput
                    onChangeText={setPotencialHidrogenico}
                    value={potencialhidrogenico}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text>Oxigênio dissolvido:</Text>
                <TextInput
                    onChangeText={setOxigenioDissolvido}
                    value={oxigeniodissolvido}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text>Temperatura:</Text>
                <TextInput
                    onChangeText={setTemperatura}
                    value={temperatura}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text>condutividade:</Text>
                <TextInput
                    onChangeText={setCondutividade}
                    value={condutividade}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text>Salinidade:</Text>
                <TextInput
                    onChangeText={setSalinidade}
                    value={salinidade}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text>Turbidez:</Text>
                <TextInput
                    onChangeText={setTurbidez}
                    value={turbidez}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Button
                    title={textButton}
                    onPress={() => validation()}
                />
            </View>

            < ResultText messageResult={message} />

        </View>
    );
}