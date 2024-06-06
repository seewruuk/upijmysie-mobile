import {useEffect, useState} from "react";
import {View} from "react-native";
import {easyQuestions} from "../../constans/cat1";
import {mediumQuestions} from "../../constans/cat2";
import {hardQuestions} from "../../constans/cat3";
import QuestionCard from "../../components/QuestionCard";

const Game = () => {
    const {difficulty} = route.params;
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);


    useEffect(() => {
        let selectedQuestions = [];
        if (difficulty === 'easy') {
            selectedQuestions = easyQuestions;
        } else if (difficulty === 'medium') {
            selectedQuestions = mediumQuestions;
        } else if (difficulty === 'hard') {
            selectedQuestions = hardQuestions;
        }

        setQuestions(shuffleArray(selectedQuestions));
        setCurrentQuestion(selectedQuestions[0]);
    }, [difficulty]);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    return (
        <View>
            {currentQuestion ? (
                <QuestionCard question={currentQuestion.question} />
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
}