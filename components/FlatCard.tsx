import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function FlatCard() {
    return(
        <SafeAreaView>
            <View style={style.screen}>
                <Text style={style.headingText}>
                    Flat Card
                </Text>
                <View style={style.container}>
                    <View style={[style.card, style.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[style.card, style.cardTwo]}>
                        <Text>blue</Text>
                    </View>
                    <View style={[style.card, style.cardThree]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[style.card, style.cardOne]}>
                        <Text>redd</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    screen:{
        paddingTop : 30,
        paddingHorizontal : 8
    },
    headingText : {
        fontSize : 24,
        fontWeight : "bold",
    },
    container: {
        flex: 1,
        flexDirection : "row",
        padding : 8,
    },
    card : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        height : 100,
        width : 100,
        borderRadius: 18,
        margin : 8
    },
    cardOne : {
        backgroundColor : '#EF5354'
    },
    cardTwo : {
        backgroundColor : '#50DBB4'
    },
    cardThree : {
        backgroundColor : '#5DA3FA'
    }
})