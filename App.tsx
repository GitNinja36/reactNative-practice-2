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
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

const App = () =>{
  return(
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <ElevatedCards/>
        <FancyCards/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;