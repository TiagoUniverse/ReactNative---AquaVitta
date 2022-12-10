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
            endereco: json.endereco,
            latitude: json.latitude,
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
            <Text style={styles.pokemonPeso}>Endereço: {rioEscolhido.endereco}</Text>
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