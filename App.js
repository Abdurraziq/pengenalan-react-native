import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from 'react-native';

const Kucing = (props) => {
  const [lapar, setLapar] = useState(true);

  return (
    <View style={styles.kucing}>
      <Text>
        Nama Saya {props.nama}, dan saya {lapar ? "LAPAR" : "KENYANG"} !
      </Text>
      <Button
        onPress={() => {
          setLapar(false);
        }}
        disabled={!lapar}
        title={lapar ? "Beri Saya Ikan" : "Terima Kasih"}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <View style={styles.container}>
      <Kucing nama="Kitty" />
      <Kucing nama="Meong" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  kucing: {
    marginVertical: 16, 
    textAlign: 'center',
    alignSelf: 'stretch',
  }
});


export default Cafe;
