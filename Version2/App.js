import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image, 
  Button,
  ScrollView
 } from 'react-native';
import { ProductFile } from './assets/products'
/* 
  I can not get MongoDB connected to save my proverbial life. It's a "character error in the password"...
  The code I've attached is something that I was able to piece together at the Facebook Hackathon, it works on a normal React file. 
  But on this Expo React-Native file, it's not working. I'm 80% certain that I've got the JSON structure right, I'm certain that if I were running this in a regular React File, I could get it running in 5 minutes. 
  I'm going to contunue working on this issue because I need to have it solved for my own projects, and hope I will have the chance to demonstrate my skills at Mavely. 
  This project was a refreshing trip down memory lane, as I've not worked on a mobile application since I was in college, and am happy that I've not lost my touch with the technology. 
*/


var obj = JSON.parse(eventFile); 
var i;
var rows = [];
for (i = 0; i < obj.Product.length; i++) { 
    var event = obj.Product[i];
    rows.push(<Box event_obj={event} />);
} 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe4ea',
  },
  head: {
    backgroundColor: '#3498db', 
    height: 100, 
    alignContent: "center", 
    alignItems: "center",
    justifyContent: "center", 
    textDecorationColor: 'white'
  },

  //The Body of the App
  mbody:{
    backgroundColor: '#ffffff' 
  }, 
  section:{
    alignContent: "center", 
    alignItems: "center", 
    justifyContent: "center",
    paddingTop: 20,  
    paddingBottom: 50
  }, 

  foot:{
    height: 100, 
    backgroundColor: '#0652DD'
  }

});

