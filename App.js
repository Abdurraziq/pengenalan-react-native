import React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="home">
        <stack.Screen name="Home" component={HalamanHome} />
        <stack.Screen name="About" component={HalamanAbout} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const HalamanHome = ({navigation}) => {
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button title='About' onPress={() => navigation.navigate('About')}/>
    </View>
  )
}

const HalamanAbout = () => {
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Detail Screen</Text>
    </View>
  )
}

export default App;
