import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function SearchBar(props) {

    

    return (
        <View style={styles.container}>
        <TextInput
            placeholder='Ara..'
            onChangeText={props.arama}

        />
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "lightgrey",
        margin:10,
        paddingHorizontal:20,
        borderRadius:25,
    }
})