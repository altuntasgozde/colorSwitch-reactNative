import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [mainArea, setMainArea] = useState();

  const GetColor = (event) => {
    if (event == 1) {
      setMainArea(styles.red);
    } else if (event == 2) {
      setMainArea(styles.blue);
    } else if (event == 3) {
      setMainArea(styles.green);
    } else {
      setMainArea(styles.pink);
    }
  };

  return (
    <View style={[styles.container,mainArea]}>
      <View>
        <StatusBar style="auto" />
        <View>
          <Text>Main Area</Text>
        </View>
        <View style={styles.wrap}>
          <Pressable value="red" onPress={() => GetColor(1)}>
            <Text style={styles.red}>Kırmızı</Text>
          </Pressable>
          <Pressable value="blue" onPress={() => GetColor(2)}>
            <Text style={styles.blue}>Mavi</Text>
          </Pressable>
          <Pressable value="green" onPress={() => GetColor(3)}>
            <Text style={styles.green}>Yeşil</Text>
          </Pressable>
          <Pressable value="pink" onPress={() => GetColor(4)}>
            <Text style={styles.pink}>Pembe</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  wrap: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
  },
  red: {
    backgroundColor: "red",
    padding: 20,
  },
  blue: {
    backgroundColor: "blue",
    padding: 20,
  },
  green: {
    backgroundColor: "green",
    padding: 20,
  },
  pink: {
    backgroundColor: "pink",
    padding: 20,
  },
});
