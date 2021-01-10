import React from "react";

import {View, Text, StyleSheet, Image } from "react-native";

import {Container, Header, Content, Card, CardItem, H1} from "native-base";

const Joke = ({details}) => {
    return(
    <View>
                <Card style={styles.card}>
                <CardItem cardBody style= {styles.cardItem}>
                    <H1 underline>
                        Jokes Generator
                    </H1>
                </CardItem>

                <CardItem cardBody style= {styles.cardItem}>
                    <Text style={styles.text}>
                        {details.value}
                    </Text>
                </CardItem>
                
            </Card>
            </View>
    )
}
export default Joke;

const styles = StyleSheet.create({
    card: {
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4f8a8b',
      borderColor: '#4f8a8b',
      borderWidth: 2,
    },
    cardItem: {
      backgroundColor: '#4f8a8b',
    },
    text: {
      color: '#FFF',
      fontSize: 20,
      textAlign:"center",
      marginBottom: 30,
      marginTop: 30

    },
  });