import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionCard = ({ question }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.questionText}>{question}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    questionText: {
        fontSize: 18,
    },
});

export default QuestionCard;