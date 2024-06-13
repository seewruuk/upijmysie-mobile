import {View, Text, Button} from "react-native";
import {router} from "expo-router";
import {useGlobalContext} from "../context/GlobalProvider";
import {useEffect} from "react";


const Loading = () => {

    const {categories} = useGlobalContext();

    useEffect(() => {
        const redirect = () => {
            router.push("game");
        }
        setTimeout(redirect, 2000);
    }, []);


    return (
        <View className={"flex-1 justify-center items-center h-screen w-screen"}>
            <Text>Ładowanie...</Text>
            <Button onPress={() =>router.back()} title={"Back"}/>

            {
                categories.easy && <Text>Easy</Text>
            }
            {
                categories.medium && <Text>Medium</Text>
            }
            {
                categories.hard && <Text>Hard</Text>
            }
        </View>
    );
}

export default Loading