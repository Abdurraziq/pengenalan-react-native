import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Hell I am Bold</Text>
      <Text style={styles.italic}>Hell I am Italic</Text>
      <Text style={styles.underline}>Hell I am Underline</Text>
      <Text style={styles.big}>Hell I am Big</Text>
      <Text style={[styles.big, styles.blue]}>
        Hell I am Big and Have Color
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
  big: { fontSize: responsiveFontSize(3), fontWeight: 600 },
  blue: { color: "blue" },
});

export default App;
