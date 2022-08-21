import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [newItemText, setItemText] = useState("");

  const trackText = (text) => {
    setItemText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TextInput
          placeholder="Item..."
          style={styles.itemText}
          placeholderTextColor={"white"}
          onChangeText={trackText}
        />
      </View>
      <View style={styles.itemContainer}>
        <Button
          title="Add Item"
          onPress={() => {
            onAddItem(newItemText);
          }}
        />
      </View>
    </View>
  );
};

export default NewItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#270af1",
    borderRadius: 20,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemText: {
    color: "white",
    fontFamily: "caveat",
  },
});
