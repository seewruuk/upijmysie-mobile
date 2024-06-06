import {View, Text} from "react-native";
import {Link} from "expo-router";
import { SplashScreen, Stack } from "expo-router";

const RootLayout = () => {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="game" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout;