import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function SarkiKarti(props) {
  return (
    <View style={styles.container}>
        <Image style={styles.image}
            source={{uri: props.song.imageUrl}}
            />
        <View style={styles.ic_container}>
            <Text style={styles.title}>{props.song.title}</Text>
            <View>
                <Text>{props.song.artist}</Text>
                <Text>{props.song.year}</Text>
            </View>
        </View>
        {props.song.isSoldOut &&
            <Text style={styles.sold_container}>TÜKENDİ</Text>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        height : 135,
        alignItems: "center" // Dikeyde ortaladı
    },
    image: {
        width:100,
        height:100,
        borderRadius:50
    },
    ic_container: {
        justifyContent: "center",
        flex: 1,
        padding:10
    },
    title: {
        fontWeight: "bold",
        fontSize: 27,
        color:"black"
    },
    sold_container: {
        color: "red",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        fontSize:11,
        marginEnd:10
    }
})