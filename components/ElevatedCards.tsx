import React from "react";
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';

export default function ElevatedCards(){
    return(
        <SafeAreaView>
            <View >
                <Text style={styles.headingText}>
                    Elevated Cards
                </Text>
            </View>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>ME</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>scrool</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>more</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop : 30,
        paddingHorizontal : 8
    },
    headingText : {
        fontSize : 24,
        fontWeight : "bold",
    },
    container: {
        padding : 8,
    },
    card:{
        flex :1,
        alignItems: 'center',
        justifyContent: 'center',
        width : 100,
        height : 100,
        borderRadius :18,
        margin : 8
    },
    cardElevated:{
        backgroundColor : '#CAD5E2',
        elevation : 4,
        shadowOffset: {
            width :3,
            height :3,
        },
        shadowColor:'#333',
        shadowRadius: 1
    }
})