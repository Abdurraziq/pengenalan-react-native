import React, { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";

const App = (props) => {
  const [nama, setNama] = useState("");
  const tampilAlert = () => {
    alert("Nama kamu = " + nama);
  };

  return (
    <View style={styles.container}>
      <View style={styles.komponen}>
        <Text>Siapa nama Kamu?</Text>
        <TextInput
          placeholder="Ketikkan Nama"
          style={styles.tombol}
          onChangeText={(text) => setNama(text)}
        />
        <Text>Nama kamu: {nama}</Text>
        <Button title="Submit" onPress={tampilAlert} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  komponen: {
    marginVertical: 16,
    textAlign: "center",
    alignSelf: "stretch",
  },
  tombol: {
    height: 30,
    borderWidth: 1
  }
});

export default App;
