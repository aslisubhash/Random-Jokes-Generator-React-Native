
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
      <View>
        <Joke details={details}/>
        <Button 
          rounded
          onPress={()=>fetchJokes()}
          >
            <Text>New Joke</Text>
          </Button>
      </View>
    )
  }
}

export default App;
