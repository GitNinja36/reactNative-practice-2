import React from "react";
import {
  View, 
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native';
import FlatCard from "./components/FlatCard";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";

const App = () =>{
  return(
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <ElevatedCards/>
        <FancyCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;