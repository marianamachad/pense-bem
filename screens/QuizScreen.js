import React, { useState } from "react";
import { Image } from "react-native";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function QuizScreen({
  book,
  onFinish,
  onBack,
}) {
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] = useState(0);

  const [attempts, setAttempts] =
    useState(1);

  const [wrongOption, setWrongOption] =
    useState(null);

  const [correctOption, setCorrectOption] =
    useState(null);

  const question =
    book.questions[currentQuestion];

  function goToNextQuestion(finalScore) {
    const nextQuestion =
      currentQuestion + 1;

    setAttempts(1);

    setCorrectOption(null);

    setWrongOption(null);

    if (
      nextQuestion <
      book.questions.length
    ) {
      setCurrentQuestion(nextQuestion);
    } else {
      onFinish(finalScore);
    }
  }

  function handleAnswer(option) {
    let newScore = score;

    if (option === question.answer) {
      if (attempts === 1) {
        newScore += 3;
      } else if (attempts === 2) {
        newScore += 2;
      } else {
        newScore += 1;
      }

      setScore(newScore);

      setCorrectOption(option);

      setTimeout(() => {
        goToNextQuestion(newScore);
      }, 700);

      return;
    }

    setWrongOption(option);

    setTimeout(() => {
      setWrongOption(null);

      if (attempts < 3) {
        setAttempts(attempts + 1);
        return;
      }

      goToNextQuestion(newScore);
    }, 700);
  }

  return (
    <ScrollView
      contentContainerStyle={
        styles.container
      }
    >
      <Pressable
        onPress={onBack}
        style={({ pressed }) => [
          styles.backArrow,

          pressed &&
            styles.backArrowPressed,
        ]}
      >
        <Ionicons
          name="arrow-back"
          size={30}
          color="white"
        />
      </Pressable>

      <Text style={styles.progress}>
        Pergunta{" "}
        {currentQuestion + 1} /{" "}
        {book.questions.length}
      </Text>

      <View style={styles.questionBox}>
        <Text style={styles.question}>
          {question.q}
        </Text>

        {question.image && (
          <Image
            source={question.image}
            style={styles.image}
            resizeMode="contain"
          />
        )}
      </View>

      {question.hintOptions && (
        <View style={styles.hintBox}>
          <Text style={styles.hintTitle}>
            Alternativas da próxima pergunta:
          </Text>

          {question.hintOptions.map(
            (item, index) => (
              <Text
                key={index}
                style={styles.hintText}
              >
                • {item}
              </Text>
            )
          )}
        </View>
      )}

      <Text style={styles.attemptText}>
        Tentativa {attempts}/3
      </Text>

      <View
        style={styles.optionsContainer}
      >
        {question.options.map(
          (option, index) => (
            <Pressable
              key={index}
              onPress={() =>
                handleAnswer(option)
              }
              style={({ pressed }) => [
                styles.optionButton,

                wrongOption === option &&
                  styles.wrongOption,

                correctOption === option &&
                  styles.correctOption,

                pressed &&
                  styles.optionPressed,
              ]}
            >
              <Text
                style={styles.optionText}
              >
                {option}
              </Text>
            </Pressable>
          )
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    paddingHorizontal: 24,

    paddingTop: 90,

    paddingBottom: 190,
  },

  backArrow: {
    position: "absolute",

    top: 40,

    left: 20,

    zIndex: 10,

    width: 52,

    height: 52,

    borderRadius: 26,

    backgroundColor:
      "rgba(0,0,0,0.35)",

    justifyContent: "center",

    alignItems: "center",

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.12)",
  },

  backArrowPressed: {
    transform: [{ scale: 0.92 }],

    opacity: 0.75,
  },

  progress: {
    color: "#49F2F2",

    fontSize: 18,

    fontWeight: "800",

    marginBottom: 25,

    textAlign: "center",
  },

  questionBox: {
    backgroundColor:
      "rgba(0,0,0,0.45)",

    borderRadius: 24,

    padding: 28,

    marginBottom: 22,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.1)",
  },

  question: {
    color: "white",

    fontSize: 20,

    fontWeight: "900",

    textAlign: "center",

    lineHeight: 26,
  },

  hintBox: {
    width: "100%",

    backgroundColor:
      "rgba(255,255,255,0.06)",

    borderRadius: 18,

    padding: 16,

    marginBottom: 18,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  hintTitle: {
    color: "#49F2F2",

    fontSize: 16,

    fontWeight: "800",

    marginBottom: 8,
  },

  hintText: {
    color: "white",

    fontSize: 15,

    marginBottom: 4,

    fontWeight: "600",
  },

  attemptText: {
    color: "#49F2F2",

    fontSize: 18,

    fontWeight: "800",

    textAlign: "center",

    marginBottom: 18,
  },

  optionsContainer: {
    gap: 16,
  },

  optionButton: {
    backgroundColor:
      "rgba(73,242,242,0.16)",

    borderWidth: 1,

    borderColor:
      "rgba(73,242,242,0.4)",

    borderRadius: 22,

    paddingVertical: 18,

    paddingHorizontal: 18,
  },

  optionPressed: {
    transform: [{ scale: 0.97 }],

    opacity: 0.75,
  },

  optionText: {
    color: "white",

    fontSize: 20,

    fontWeight: "800",

    textAlign: "center",
  },

  wrongOption: {
    backgroundColor:
      "rgba(255,0,0,0.25)",

    borderColor: "#ff4d4d",
  },

  correctOption: {
    backgroundColor:
      "rgba(0,255,120,0.25)",

    borderColor: "#00ff88",
  },

  image: {
    width: "100%",

    height: 200,

    marginTop: 15,

    alignSelf: "center",
  },
});