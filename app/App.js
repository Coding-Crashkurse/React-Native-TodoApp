import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ImageBackground, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Items from "./components/Items";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";

export default function App() {
  // https://docs.expo.dev/versions/latest/sdk/splash-screen/
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          caveat: require("./fonts/OpenSans-Medium.ttf"),
          "caveat-bold": require("./fonts/OpenSans-Bold.ttf"),
          "caveat-semibold": require("./fonts/OpenSans-SemiBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("./assets/shopping.jpg")}
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <Header>ToDo-Liste</Header>
        <Items></Items>
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
