import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PopBlack: require("../assets/fonts/Poppins-Black.ttf"),
    PopRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PopSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PopBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PopMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PopLight: require("../assets/fonts/Poppins-Light.ttf"),
    PopThin: require("../assets/fonts/Poppins-Thin.ttf"),
    PopExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    PopExtraLight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(root)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
