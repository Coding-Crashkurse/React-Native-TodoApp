import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Items = ({ desc, done, index, onSetDone, onDeleteItem }) => {
  return (
    <View
      style={
        done
          ? [styles.baseContainer, styles.itemDoneContainer]
          : [styles.baseContainer, styles.itemUndoneContainer]
      }
    >
      <View>
        {/* <Text onPress={() => onSetDone(index, desc, !done)}>{desc}</Text> */}
        <Pressable onPress={() => onSetDone(index, desc, !done)} android_ripple>
          <Text style={styles.font}>{desc}</Text>
        </Pressable>
      </View>
      <View>
        {done ? (
          <Pressable onPress={() => onDeleteItem(index)}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </Pressable>
        ) : (
          <Ionicons name="md-close-circle" size={32} color="red" />
        )}
      </View>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  baseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
    alignItems: "center",
    marginVertical: 4,
    borderWidth: 2,
  },
  font: {
    fontFamily: "caveat",
  },
  itemUndoneContainer: {
    backgroundColor: "white",
    borderColor: "#270af1",
  },
  itemDoneContainer: {
    backgroundColor: "lightgray",
    borderColor: "#1085eb",
  },
});
