import {View, Text, Button} from "react-native";
import {router} from "expo-router";
import {useContext, useState} from "react";
import {useGlobalContext} from "../context/GlobalProvider";


const Home = () => {

    const {categories, setCategories} = useGlobalContext();

    const startGame = (categories) => {
        const selectedCategories = Object.keys(categories).filter(key => categories[key]);
        if (selectedCategories.length === 0) {
            alert("Wybierz przynajmniej jedną kategorię");
            return;
        }
        router.push("loading");
    };

    return (
        <View className={"flex-1 items-center justify-center"}>
            <Text className={"text-2xl mb-2"}>Wybierz kategorie pytań</Text>
            <View className={"flex-row items-center"}>
                <Button onPress={() => setCategories({...categories, easy: !categories.easy})} title={"Łatwe"}/>
                {
                    categories.easy && <View><Text>☑️</Text></View>
                }
            </View>

            <View className={"flex-row items-center"}>
                <Button onPress={() => setCategories({...categories, medium: !categories.medium})} title={"Średnie"}/>

                {
                    categories.medium && <View><Text>☑️</Text></View>
                }
            </View>

            <View className={"flex-row items-center"}>
                <Button onPress={() => setCategories({...categories, hard: !categories.hard})} title={"Trudne"}/>
                {
                    categories.hard && <View><Text>☑️</Text></View>
                }
            </View>

            <Button onPress={() => startGame(categories)} title={"Rozpocznij grę"}/>

        </View>
    );
};


export default Home;