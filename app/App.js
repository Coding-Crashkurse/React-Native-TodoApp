import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.alignContainer}>
        <TextInput placeholder="Todo hinzufügen..."></TextInput>
        <Button title="Add Todo" color="#841584"></Button>
      </View>

      <Text>This is my awesome app</Text>

      <StatusBar style="auto" />
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
  alignContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
  },
});
