import React from "react"
import { View, Text } from "react-native"



export default function ResultText(props) {
    return (
        <View>
            <Text>{props.messageResult}  </Text>
        </View>
    );
}