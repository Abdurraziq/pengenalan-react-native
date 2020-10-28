import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Kucing = (props) => {
  const [lapar, setLapar] = useState(true);

  return (
    <View>
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
    <>
      <Kucing nama="Kitty" />
      <Kucing nama="Meong" />
    </>
  );
};


export default Cafe;
