import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texTitle}>Selamat Datang</Text>
      <Text style={styles.texTitle}>Di</Text>
      <Text style={styles.texTitle}>Aplikasi ABC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
    alignItems: 'center'
  },
  texTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#43b2ec'
  },
});

export default App;
