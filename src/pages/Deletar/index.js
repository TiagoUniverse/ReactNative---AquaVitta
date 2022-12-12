import React, { useState } from 'react';
import { Alert, View, ScrollView, Text, Image, Button, StyleSheet, TextInput } from 'react-native';


export default function Alterar() {
  const [rioEscolhido, setRioEscolhido] = useState(null);
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


  const deletarRio = () => {
    const endpoint = `https://aquavitta1.pythonanywhere.com/nalinha/deletar/${nomeRio}/${endereco}/${latitude}/${longitude}/${potencialhidrogenico}/${oxigeniodissolvido}/${temperatura}/${condutividade}/${salinidade}/${turbidez}`;
    console.log(endpoint)
    console.log(nomeRio)
    fetch(endpoint)
      .then(resposta => resposta.json())
        .catch(() => {
          Alert.alert('Erro', 'Não foi possível excluir este ponto de rio');
        });
  }


  const getRio = ( nomeRio) => {
    const endpoint = `https://aquavitta1.pythonanywhere.com/leitura/${ nomeRio}`;
    fetch(endpoint)
      .then(resposta => resposta.json())
      .then(json => {
        const rio = {
          nomeRio: json.rio,
          endereco: json.endereco,
          condutividade: json.condutividade,
          latitude: json.latitude,
          longitude: json.longitude,
          oxigeniodissolvido: json.oxigeniodissolvido,
          potencialhidrogenico: json.potencialhidrogenico,
          salinidade: json.salinidade,
          temperatura: json.temperatura,
          turbidez: json.turbidez
        };
        setRioEscolhido(rio);
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível encontrar este ponto de rio');
      });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>RIO</Text>
        </View>
        {rioEscolhido != null && (
          <View style={styles.Box}>
            <Text style={styles.linha}>Nome do rio: {rioEscolhido.nomeRio}</Text>
            <Text style={styles.linha}>Endereço: {rioEscolhido.endereco}</Text>
            <Text style={styles.linha}>condutividade: {rioEscolhido.condutividade}</Text>
            <Text style={styles.linha}>Latitude: {rioEscolhido.latitude}</Text>
            <Text style={styles.linha}>Longitude: {rioEscolhido.longitude}</Text>
            <Text style={styles.linha}>Oxigênio dissolvido: {rioEscolhido.oxigeniodissolvido}</Text>
            <Text style={styles.linha}>Potencial hidrogênico: {rioEscolhido.potencialhidrogenico}</Text>
            <Text style={styles.linha}>Salinidade: {rioEscolhido.salinidade}</Text>
            <Text style={styles.linha}>temperatura: {rioEscolhido.temperatura}</Text>
            <Text style={styles.linha}>turbidez: {rioEscolhido.turbidez}</Text>
          </View>
        )}


        <View style={styles.cardContainer}>
          {rioEscolhido == null && (
            <><><Text>Digite o nome do rio no campo abaixo</Text></><TextInput
              onChangeText={setNomeRio}
              value={nomeRio}
              KeyboardType="text" /><Button title="Selecionar um rio para exclusão" onPress={() => getRio(nomeRio)} /></>
          )}

          {rioEscolhido != null && (
            <><><Text>Confira o ponto de rio que vai excluir e confirme no botão abaixo</Text></>
            <Button  title="Excluir" onPress={() => atualizarRio()}></Button></>
          )}

        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  topo: { height: 80, padding: 20, paddingTop: 40, marginBottom: 20, backgroundColor: '#e73e33' },
  topoTitulo: { fontSize: 22, marginBottom: -10, color: '#fff', textAlign: 'center' },

  cardContainer: { borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 4, marginBottom: 10, marginHorizontal: 20, padding: 10 },
  cardTitle: { fontSize: 22, marginBottom: 20, textAlign: 'center', color: '#656565' },

  Box: { alignItems: 'center' },
  linha: { fontSize: 18 },
});

