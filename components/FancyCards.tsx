import React from "react";
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';

export default function FancyCards(){
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.headingText}>Treanding Places</Text>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image 
                        source={{
                            uri : 'https://images.pexels.com/photos/31790363/pexels-photo-31790363/free-photo-of-berlin-skyline-with-tv-tower-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Hawa mahel</Text>
                        <Text style={styles.cardLable}>Pink city, Jaipur</Text>
                        <Text style={styles.cardDescription}>Pink city, JaipurPink city, JaipurPink city, JaipurPink city, JaipurPink city, Jaipur</Text>
                        <Text style={styles.cardFooter}>12 mins away</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : "bold",
    },
    cardElevated:{
        backgroundColor : '#FFFFFF',
        elevation: 3, 
        shadowOffset: {
            width: 1, 
            height: 1
        }
    },
    card:{
        // width:350,
        height: 360,
        borderRadius: 18,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardImage : {
        height: 180,
        marginBottom:8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody:{
        flex : 1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        fontSize: 22, 
        fontWeight: 'bold', 
        paddingHorizontal: 3,
        color:'#000000',
        marginBottom : 4
    },
    cardLable:{
        fontSize: 16, 
        marginBottom:6
    },
    cardDescription:{
        fontSize: 14, 
        marginBottom:12,
        flexShrink :1
    },
    cardFooter:{
        fontSize: 12, 
    }
})