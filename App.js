import React, { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";

const App = (props) => {
  const [nama, setNama] = useState("");
  const tampilAlert = () => {
    alert("Nama kamu = " + nama);
  };

  return (
    <View style={styles.container}>
      <Text>Siapa nama Kamu?</Text>
      <TextInput
        placeholder="Ketikkan Nama"
        style={{ width: 200, borderWidth: 1 }}
        onChangeText={(text) => setNama(text)}
      />
      <Text>Nama kamu: {nama}</Text>
      <Button title="Submit" onPress={tampilAlert} />
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
});

export default App;
