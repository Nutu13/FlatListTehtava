import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { DATA } from "./Data";
import Row from "./components/Row";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: "100%", padding: 10, marginTop: 50 }}
        data={DATA}
        renderItem={({ item }) => <Row person={item} />}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
