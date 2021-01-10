
import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import { Text,Button, Container, H1 } from "native-base";
import Axios from "axios";
import Joke from "./components/Joke";

const App = () => {
  const [details, setDetails] = useState(null)

  const fetchJokes = async() => {
    try {
      const {data} = await Axios.get("https://api.chucknorris.io/jokes/random")
      const details = data;
      console.log(details);
      setDetails(details)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchJokes()
  },[])


  if (!details) {
    return (
      <View>
        <Text>
          Loading....
        </Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Joke details={details}/>
        <Button 
          rounded
          style={styles.button}
          onPress={()=>fetchJokes()}
          >
            <Text>New Joke</Text>
          </Button>
      </View>
    )
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor : "#222831"
  },
  button:{
    marginTop: 30,
    paddingHorizontal: 30,
    alignSelf:"center"

  }
})