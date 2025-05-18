import React from "react";
import { SafeAreaView, View, Text, Linking, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function ActionCard(){
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink)
    }
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.headingText}>ActionCard</Text>
                <View style={[styles.card, styles.cardElevated]}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.headerText}>
                            What's new in java Script 
                        </Text>
                    </View>
                    <Image
                        source={{
                            uri:'https://images.pexels.com/photos/31790363/pexels-photo-31790363/free-photo-of-berlin-skyline-with-tv-tower-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.bodyContainer}>
                        <Text numberOfLines={3}>
                            React Native lets you create truly native apps and doesn't compromise your users' experiences. It provides a core set of platform agnostic native components like View, Text, and Image that map directly to the platform's native UI building blocks.
                        </Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            onPress={()=> openWebsite('https://reactnative.dev/docs/0.78/linking#openurl')}
                        >
                            <Text style={styles.socialLink}>
                                Read More
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 8
    },
    card:{
        height: 360,
        borderRadius: 18,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated:{
        backgroundColor : '#FFFFFF',
        elevation: 3, 
        shadowOffset: {
            width: 1, 
            height: 1
        }
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        fontSize:16,
        fontWeight: '600'
    },
    cardImage:{
        height : 190,
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLink:{
        fontSize:16,
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6
    }
})