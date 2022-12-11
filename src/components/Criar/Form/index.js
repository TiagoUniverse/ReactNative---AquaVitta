import React, { useState } from "react"
import { View, Text } from "react-native"
import { Button, TextInput } from "react-native-web";
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
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [message, setmessage] = useState("Preencha as informações do ponto de rio")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Cadastrar")



    
    let cadastrarRio = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://aquavitta1.pythonanywhere.com/envio", {
            method: "POST",
            body: JSON.stringify({
              update: '',
              rio: nomeRio,
              endereco: endereco,
              latitude: latitude,
              longitude: longitude,
              potencialhidrogenico: potencialhidrogenico,
              oxigeniodissolvido: oxigeniodissolvido,
              temperatura: temperatura,
              condutividade: condutividade,
              salinidade: salinidade,
              turbidez: turbidez
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setNomeRio("");
            setEndereco("");
            setMessage("Ponto de rio criado com Sucesso");
          } else {
            setMessage("Erro ao cadastrar o ponto de rio");
          }
        } catch (err) {
          console.log(err);
        }
      };

    function validationImc() {
        if (nomeRio != null && endereco != null && latitude != null && longitude != null) {
            cadastrarRio()
            setNomeRio(null)
            setEndereco(null)
            setLatitude(null)
            setLongitude(null)
            setTextButton("Cadastrar novamente")
            return
        }
        setImc(null)
        setTextButton("Cadastrar")
        setmessage("preencha o peso e altura")
    }

    return (
        <View>
            <View>
                <Text>Nome do rio:</Text>
                <TextInput
                    onChangeText={setNomeRio}
                    value={height}
                    placeholder="Ex. 1.70"
                    KeyboardType="numeric"
                />

                <Text>Endereço:</Text>
                <TextInput
                    onChangeText={setEndereco}
                    value={weight}
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric"
                />

                <Text>Latitude:</Text>
                <TextInput
                    onChangeText={setLatitude}
                    value={weight}
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric"
                />

                <Text>Longitude:</Text>
                <TextInput
                    onChangeText={setLongitude}
                    value={weight}
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric"
                />

                <Text>Potencial hidrogênico:</Text>
                <TextInput
                    onChangeText={setPotencialHidrogenico}
                    value={weight}
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric"
                />

                <Text>Oxigênio dissolvido:</Text>
                <TextInput
                    onChangeText={setOxigenioDissolvido}
                    value={weight}
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric"
                />

                <Text>Temperatura:</Text>
                <TextInput
                    onChangeText={setTemperatura}
                    value={weight}
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric"
                />

                <Text>condutividade:</Text>
                <TextInput
                    onChangeText={setCondutividade}
                    value={weight}
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric"
                />

                <Text>Salinidade:</Text>
                <TextInput
                    onChangeText={setSalinidade}
                    value={weight}
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric"
                />

                <Text>Turbidez:</Text>
                <TextInput
                    onChangeText={setTurbidez}
                    value={weight}
                    placeholder="Ex. 60.30"
                    KeyboardType="numeric"
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