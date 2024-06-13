import {View, Text} from "react-native";
import {Link} from "expo-router";
import {SplashScreen, Stack} from "expo-router";
import GlobalProvider from "../context/GlobalProvider";

const RootLayout = () => {
    return (
        <GlobalProvider>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="loading" options={{headerShown: false}}/>
                <Stack.Screen name="game" options={{headerShown: false}}/>
            </Stack>
        </GlobalProvider>

    )
}

export default RootLayout;