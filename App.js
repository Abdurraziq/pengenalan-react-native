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
import logo from "./assets/fixcil.png";

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Login Here</Text>
      <TextInput
        style={[styles.wrapper, styles.textInput]}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.wrapper, styles.textInput]}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <View style={[styles.wrapper, styles.button]}>
          <Text style={styles.textButton}>LOGIN</Text>
        </View>
      </TouchableOpacity>
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
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: "#2196F3",
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
  },
  wrapper: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderRadius: 10,
    marginTop: responsiveHeight(3),
  },
  textInput: {
    borderColor: "#777",
    borderWidth: 1,
    paddingHorizontal: responsiveWidth(3),
  },
  button: {    
    alignItems: "center",
    backgroundColor: "#43b2ec",
    justifyContent: "center",
    alignSelf: "center",
  },
  textButton: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: responsiveFontSize(2.2),
  },
});

export default App;
