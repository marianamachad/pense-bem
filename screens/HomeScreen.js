import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

const mickey = require("../assets/mickeyy.png");

export default function HomeScreen({
  onPlay,
  onInstructions,
  onScores,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>
          PENSE BEM
        </Text>

        <Text style={styles.subtitle}>
          Disney: Rumo às Estrelas
        </Text>
      </View>

      <Image
        source={mickey}
        style={styles.image}
      />

      <View style={styles.buttons}>
        <Pressable
          onPress={onPlay}
          style={({ pressed }) => [
            styles.playButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.playText}>
            🚀 JOGAR
          </Text>
        </Pressable>

        <Pressable
          onPress={onInstructions}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed &&
              styles.secondaryPressed,
          ]}
        >
          <Text style={styles.secondaryText}>
            📘 COMO JOGAR
          </Text>
        </Pressable>

        <Pressable
          onPress={onScores}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed &&
              styles.secondaryPressed,
          ]}
        >
          <Text style={styles.secondaryText}>
            ⭐ PONTUAÇÕES
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "space-evenly",

    alignItems: "center",

    paddingHorizontal: 24,

    paddingTop: 40,

    paddingBottom: 35,

    width: "100%",
  },

  topSection: {
    alignItems: "center",
  },

  title: {
    fontSize: 42,

    fontWeight: "900",

    color: "#49F2F2",

    letterSpacing: 3,

    marginBottom: -4,

    textShadowColor:
      "rgba(73,242,242,0.45)",

    textShadowOffset: {
      width: 0,
      height: 0,
    },

    textShadowRadius: 10,
  },

  subtitle: {
    fontSize: 29,

    color: "white",

    textAlign: "center",

    fontWeight: "700",

    textShadowColor:
      "rgba(0,0,0,0.45)",

    textShadowOffset: {
      width: 0,
      height: 2,
    },

    textShadowRadius: 6,
  },

  image: {
    width: 320,

    height: 320,

    resizeMode: "contain",

    marginTop: 20,

    marginBottom: 10,
  },

  buttons: {
    width: "100%",

    marginTop: 10,

    alignItems: "center",

    gap: 6,
  },

  playButton: {
    backgroundColor: "#49F2F2",

    width: "100%",

    paddingVertical: 20,

    borderRadius: 40,

    alignItems: "center",

    marginBottom: 18,

    shadowColor: "#49F2F2",

    shadowOpacity: 0.55,

    shadowRadius: 12,

    elevation: 10,
  },

  buttonPressed: {
    transform: [{ scale: 0.96 }],

    opacity: 0.85,
  },

  playText: {
    color: "#07131F",

    fontSize: 24,

    fontWeight: "800",

    letterSpacing: 1,
  },

  secondaryButton: {
    backgroundColor:
      "rgba(0,0,0,0.45)",

    width: "92%",

    paddingVertical: 16,

    borderRadius: 40,

    alignItems: "center",

    marginBottom: 10,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  secondaryPressed: {
    transform: [{ scale: 0.96 }],

    opacity: 0.75,
  },

  secondaryText: {
    color: "white",

    fontSize: 18,

    fontWeight: "700",
  },
});