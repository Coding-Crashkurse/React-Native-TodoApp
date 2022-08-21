import { Text, StyleSheet, View, Alert } from "react-native";

const AllDone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.width}>
        <Text style={styles.text}>Erledigt!</Text>
      </View>
    </View>
  );
};

export default AllDone;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
  },
  width: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "gray",
    height: 70,
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#270af1",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontFamily: "caveat",
  },
});
