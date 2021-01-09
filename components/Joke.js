import React from "react";

import {View, Text, StyleSheet, Image } from "react-native";

import {Container, Header, Content, Card, CardItem, H1} from "native-base";

const Joke = ({details}) => {
    return(
        <H1>
            {details.value}
        </H1>
    )
}
export default Joke;

// const styles = StyleSheet.create({
//     card: {
//       width: '90%',
//       justifyContent: 'flex-start',
//       alignItems: 'center',
//       backgroundColor: '#4f8a8b',
//       borderColor: '#4f8a8b',
//       borderWidth: 2,
//     },
//     cardItem: {
//       backgroundColor: '#4f8a8b',
//     },
//     image: {
//       width: 150,
//       height: 150,
//       borderRadius: 150 / 2,
//       overflow: 'hidden',
//       borderWidth: 3,
//       borderColor: '#fbd46d',
//       marginTop: -50,
//     },
//     text: {
//       color: '#000',
//     },
//   });