import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function Home({ navigation }) {
    return (
        <View>
            <Text> Aqua Vitta</Text>

            <Button
                title="Criar"
                onPress={() => navigation.navigate('Criar')}
            />

            <Button
                title="Consultar"
                onPress={() => navigation.navigate('Consultar')}
            />

            <Button
                title="Alterar"
                onPress={() => navigation.navigate('Alterar')}
            />

            <Button
                title="Deletar"
                onPress={() => navigation.navigate('Deletar')}
            />
        </View>
    );
}