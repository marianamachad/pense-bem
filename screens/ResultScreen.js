import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

export default function ResultScreen({
  book,
  score,
  onPlayAgain,
  onHome,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        RESULTADO
      </Text>

      <View style={styles.box}>
        <Text style={styles.finished}>
          Fim do jogo! 🚀
        </Text>

        <Text style={styles.program}>
          {book.title}
        </Text>

        <Text style={styles.bookCode}>
          Livro {140 + book.id}
        </Text>

        <Text style={styles.score}>
          {score}/90
        </Text>

        <Text style={styles.scoreLabel}>
          pontos
        </Text>
      </View>

      <Pressable
        onPress={onPlayAgain}
        style={({ pressed }) => [
          styles.mainButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.mainButtonText}>
          Escolher outro programa
        </Text>
      </Pressable>

      <Pressable
        onPress={onHome}
        style={({ pressed }) => [
          styles.secondaryButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.secondaryButtonText}>
          Voltar ao início
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#49F2F2",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 35,
    textShadowColor: "rgba(73,242,242,0.5)",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 10,
  },

  box: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.42)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    borderRadius: 28,
    paddingHorizontal: 26,
    paddingVertical: 36,
    alignItems: "center",
    marginBottom: 28,
  },

  finished: {
    color: "white",
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 16,
  },

  program: {
    color: "#49F2F2",
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 4,
  },

  bookCode: {
    color: "#dffcff",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 28,
  },

  score: {
    color: "#49F2F2",
    fontSize: 64,
    fontWeight: "900",
  },

  scoreLabel: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
    marginTop: -6,
  },

  mainButton: {
    backgroundColor: "#49F2F2",
    width: "100%",
    paddingVertical: 18,
    borderRadius: 40,
    alignItems: "center",
    marginBottom: 14,
  },

  mainButtonText: {
    color: "#07131F",
    fontSize: 19,
    fontWeight: "900",
  },

  secondaryButton: {
    backgroundColor: "rgba(0,0,0,0.65)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    width: "82%",
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "800",
  },

  buttonPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.75,
  },
});