import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";

import HomeScreen from "./screens/HomeScreen";
import InstructionsScreen from "./screens/InstructionsScreen";
import BookSelectScreen from "./screens/BookSelectScreen";
import QuizScreen from "./screens/QuizScreen";
import ResultScreen from "./screens/ResultScreen";
import ScoreScreen from "./screens/ScoreScreen";

const bg = require("./assets/background.png");

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedBook, setSelectedBook] = useState(null);
  const [scores, setScores] = useState([]);
  const [lastScore, setLastScore] = useState(0);

  useEffect(() => {
    loadScores();
  }, []);

  async function loadScores() {
    try {
      const savedScores = await AsyncStorage.getItem("quizScores");

      if (savedScores) {
        setScores(JSON.parse(savedScores));
      }
    } catch (error) {
      console.log("Erro ao carregar pontuações:", error);
    }
  }

  function startQuiz(book) {
    setSelectedBook(book);
    setScreen("quiz");
  }

  async function finishQuiz(score) {
    try {
      setLastScore(score);

      const newScore = {
        book: selectedBook?.title,
        score,
        date: new Date().toISOString(),
      };

      const updatedScores = [...scores, newScore];

      setScores(updatedScores);

      await AsyncStorage.setItem(
        "quizScores",
        JSON.stringify(updatedScores)
      );

      setScreen("result");
    } catch (error) {
      console.log("Erro ao salvar score:", error);

      setLastScore(score);
      setScreen("result");
    }
  }

  return (
    <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        {screen === "home" && (
          <HomeScreen
            onPlay={() => setScreen("books")}
            onInstructions={() => setScreen("instructions")}
            onScores={() => setScreen("scores")}
          />
        )}

        {screen === "instructions" && (
          <InstructionsScreen onBack={() => setScreen("home")} />
        )}

        {screen === "books" && (
          <BookSelectScreen
            onSelect={startQuiz}
            onBack={() => setScreen("home")}
          />
        )}

        {screen === "quiz" && (
          <QuizScreen
            book={selectedBook}
            onFinish={finishQuiz}
            onBack={() => setScreen("books")}
          />
        )}

        {screen === "result" && (
          <ResultScreen
            book={selectedBook}
            score={lastScore}
            onPlayAgain={() => setScreen("books")}
            onHome={() => setScreen("home")}
          />
        )}

        {screen === "scores" && (
          <ScoreScreen
            scores={scores}
            onBack={() => setScreen("home")}
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,20,0.25)",
  },
});