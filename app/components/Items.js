import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import Item from "./Item";
import { useState, useEffect } from "react";
import NewItem from "./NewItem";
import AllDone from "./AllDone";

const Items = () => {
  const [items, setItems] = useState([
    // { desc: "Einkaufen", done: false },
    // { desc: "Lesen", done: false },
    // { desc: "Programmieren", done: true },
  ]);
  const [itemslength, setItemsLength] = useState(0);
  const [allDone, setAllDone] = useState(false);
  const [ready, setReady] = useState(false);

  const addItem = (text) => {
    if (text == "") {
      Alert.alert("ERROR", "Todo ist leer. Bitte gebe Beschreibung an");
      return;
    }

    const filteredItems = items.filter((item) => {
      return item.desc === text;
    });

    if (filteredItems.length > 0) {
      Alert.alert("ERROR", "Todo existiert bereits! Bitte anderes wählen!");
      return;
    }
    setReady(true);

    setItems((prevState) => [{ desc: text, done: false }, ...prevState]);
  };

  const setDone = (index, desc, done) => {
    setReady(true);
    const itemsCopy = [...items];
    itemsCopy[index] = { desc: desc, done: done };
    setItems(itemsCopy);
  };

  const deleteItem = (index) => {
    const reduredArr = [...items];
    reduredArr.splice(index, 1);
    setItems(reduredArr);
  };

  useEffect(() => {
    if (ready) {
      const filteredItems = items.filter((item) => {
        return !item.done;
      });
      console.log("i shall only run on click");

      if (filteredItems.length === 0) {
        setAllDone(true);
      } else {
        setAllDone(false);
      }
      setItemsLength(filteredItems.length);
    }
  }, [setDone, addItem]);

  return (
    <>
      <View>
        <Text style={styles.header}>Offene Todos {itemslength}</Text>
      </View>
      <View style={styles.modal}>
        <NewItem onAddItem={addItem}></NewItem>
      </View>

      <View style={styles.container}>
        {/* {items.map((item, index) => {
          return (
            <Item
              desc={item.desc}
              done={item.done}
              index={index}
              key={index}
              onSetDone={setDone}
            />
          );
        })} */}
        <FlatList
          data={items}
          renderItem={({ item, index }) => (
            <Item
              desc={item.desc}
              done={item.done}
              index={index}
              onSetDone={setDone}
              onDeleteItem={deleteItem}
            />
          )}
          keyExtractor={(item, index) => index}
        />
        {allDone ? <AllDone /> : <></>}
      </View>
    </>
  );
};

export default Items;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 20,
    color: "white",
    fontFamily: "caveat",
  },
  container: {
    padding: 20,
  },
  modal: {
    padding: 20,
  },
});
