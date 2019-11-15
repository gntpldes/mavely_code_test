import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image, 
  Button,
  Separator, 
  ScrollView
 } from 'react-native';
//import { ApolloClient } from 'apollo-client'; 
//import { HttpLink } from 'apollo-link-http'; 
//import { InMemoryCache } from 'apollo-cache-inmemory'; 
//import { NETWORK_INTERFACE } from './config/index'; 
 
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head} >
        <Image 
        style={{width: 40, height: 40, paddingBottom: 10}}
        source={require('./assets/logo.png')} 
        />
        <Text style={{fontWeight: 'bold', color: 'white'}} >Another Chicago Winter is Upon Us</Text>
      </View>

      <View style={styles.mbody}>
       <ScrollView>
          <View style={styles.section} >
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/winter_jacket.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Winter Coat</Text>
          <Text>289.99</Text>
          <Text>Look Stylish and Stay Warm</Text>
          <Text>Seller: Macys</Text>
          <View >
            <Button title="Buy?" 
            style={{
              alignContent: 'center', 
              paddingVertical: 10, 
              borderWidth: 1, 
              borderRadius: 2, 
              marginHorizontal: 20, 
              marginVerticle: 10,
            }}/>
          </View>
        </View>

        <View style={styles.section} >
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/winter_hat.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Bomber Hat</Text>
          <Text>29.99</Text>
          <Text>For the moment the weather goes below 30 degrees</Text>
          <Text>Seller: LL Bean</Text>
          <Button title="Buy?" />
        </View>

        <View style={styles.section} >
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/winter_gloves.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Winter Gloves</Text>
          <Text>29.99</Text>
          <Text>Life's way of saying get off your phone and appreciate the beauty of the season.</Text>
          <Text>Seller: LL Bean</Text>
          <Button title="Buy?" />
        </View>

        <View style={styles.section} >
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/e_blanket.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Electric Blanket</Text>
          <Text>69.99</Text>
          <Text>For when it's too cold for a normal blanket</Text>
          <Text>Bed Bath and Beyond</Text>
          <Button title="Buy?" />
        </View>

        <View style={styles.section}>
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/fake_fur.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Fake Fur Throw Blanket</Text>
          <Text>169.99</Text>
          <Text>A winter home decor splurge</Text>
          <Text>Amazon Home Goods</Text>
          <Button title="Buy?" />
        </View>

        <View style={styles.section}>
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/instapot.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Instant Pot</Text>
          <Text>129.99</Text>
          <Text>For when you want an 8 hour stew after a 10 hour work day</Text>
          <Text>Williams Sonoma</Text>
          <Button title="Buy?" />
        </View>

        <View style={styles.section}>
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/winters_tale.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Winter's Tale</Text>
          <Text>3.99</Text>
          <Text>A Shakespearean Classic for a snowy night</Text>
          <Text>Mass Market Paperback</Text>
          <Button title="Buy?" />
        </View>

        <View style={styles.section}>
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/warandpeace.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>War and Peace Audio</Text>
          <Text>12.99</Text>
          <Text>A great way of enjoying a Magnum Opus of Western Literature while not taking your eyes off the Fire.</Text>
          <Text>Audible </Text>
          <Button title="Buy?" />
        </View>

        <View style={styles.section}>
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/firewood.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Firewood Rack</Text>
          <Text>59.99</Text>
          <Text>When you somehow got a working fireplace in the city</Text>
          <Text>Crate and Barrel</Text>
          <Button title="Buy?" />
        </View>

        <View style={styles.section}>
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/cedar_candle.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Cedar Balsalm Candle</Text>
          <Text>15.99</Text>
          <Text>When you want a Christmas Tree smell but can't fit one in your apartment</Text>
          <Text>Yankee Candle</Text>
          <Button title="Buy?" />
        </View>

        <View style={styles.section}>
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/ugly_sweater.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Ugly Sweater</Text>
          <Text>49.99</Text>
          <Text>Holiday Parties are Coming</Text>
          <Text>Macy's</Text>
          <Button title="Buy?" />
        </View>

        <View style={styles.section}>
          <Image 
          style={{width: 100, height: 200}}
          source={require('./assets/images/cat_antlers.jpg')} 
          />
          <Text style={{fontWeight: 'bold'}}>Pet Antlers</Text>
          <Text>Priceless, but 14.99</Text>
          <Text>For when EVERYBODY needs to get into the Holiday Spirit</Text>
          <Text>PetSmart</Text>
          <Button title="Buy?" />
        </View>
       
       <View style={styles.foot} >
        <Text> Version 1 base</Text>
       </View>
       </ScrollView>
      </View>

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
