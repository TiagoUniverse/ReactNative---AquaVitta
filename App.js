import React, { useState } from 'react';
import { Alert, View, ScrollView, Text, Image, Button, StyleSheet, } from 'react-native';


export default function App() {
  const [ rioEscolhido, setRioEscolhido ] = useState(null);
  const nameRio = "teste8";

  const getRio = (nameRio) => {
    const endpoint = `https://aquavitta1.pythonanywhere.com/leitura/${nameRio}`;

    fetch(endpoint)
      .then(resposta => resposta.json())
        .then( json => {
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
          Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
        });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>RIO</Text>
          </View>
          {rioEscolhido != null && (
          <View style={styles.pokemonBox}>
            <Text style={styles.pokemonPeso}>Nome do rio: {rioEscolhido.nomeRio}</Text>
            <Text style={styles.pokemonPeso}>Endereço: {rioEscolhido.endereco}</Text>
            <Text style={styles.pokemonPeso}>condutividade: {rioEscolhido.condutividade}</Text>
            <Text style={styles.pokemonPeso}>Latitude: {rioEscolhido.latitude}</Text>
            <Text style={styles.pokemonPeso}>Longitude: {rioEscolhido.longitude}</Text>
            <Text style={styles.pokemonPeso}>Oxigênio dissolvido: {rioEscolhido.oxigeniodissolvido}</Text>
            <Text style={styles.pokemonPeso}>Potencial hidrogênico: {rioEscolhido.potencialhidrogenico}</Text>
            <Text style={styles.pokemonPeso}>Salinidade: {rioEscolhido.salinidade}</Text>
            <Text style={styles.pokemonPeso}>temperatura: {rioEscolhido.temperatura}</Text>
            <Text style={styles.pokemonPeso}>turbidez: {rioEscolhido.turbidez}</Text>
          </View>
        )}


          
          
          <View style={styles.cardContainer}>
            <Text> </Text>
            <Button title="Puxar o rio" onPress={()=>getRio(nameRio)}/>
          </View>
          

        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  topo: { height: 80, padding: 20, paddingTop: 40, marginBottom: 20, backgroundColor: '#e73e33' },
  topoTitulo: { fontSize: 22, marginBottom: -10, color: '#fff', textAlign: 'center'},

  cardContainer: { borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 4, marginBottom: 10, marginHorizontal: 20, padding: 10 },
  cardTitle: { fontSize: 22, marginBottom: 20, textAlign: 'center', color: '#656565' },

  pokemonBox: { alignItems: 'center' },
  pokemonNome: { fontSize: 22 },
  pokemonPeso: { fontSize: 18 },
  pokemonImg:{ width: 150, height: 150,}
});