import {View, Text, Button} from "react-native";
import {router} from "expo-router";

const Home = () => {


    const startGame = (difficulty) => {
       router.push('/game');
    };


    return(
        <View className={"flex-1 justify-center items-center"}>
            <Text className={"text-[24px] font-medium"}>Wybierz kategorię pytań</Text>
            <Button title="Łatwe" onPress={() => startGame('easy')} />
            <Button title="Medium" onPress={() => startGame('medium')} />
            <Button title="Hard" onPress={() => startGame('hard')} />
        </View>
    )
}

export default Home;