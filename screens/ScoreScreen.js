import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

const programs = [
  { id: 1, name: "Programa 1", book: "Livro 141" },
  { id: 2, name: "Programa 2", book: "Livro 142" },
  { id: 3, name: "Programa 3", book: "Livro 143" },
  { id: 4, name: "Programa 4", book: "Livro 144" },
  { id: 5, name: "Programa 5", book: "Livro 145" },
  { id: 6, name: "Programa 6", book: "Livro 146" },
];

export default function ScoreScreen({ scores, onBack }) {
  function getBestScore(programName) {
    const results = scores.filter(
      (item) => item.book === programName
    );

    if (results.length === 0) {
      return 0;
    }

    return Math.max(
      ...results.map((item) => item.score)
    );
  }

  return (
    <ScrollView
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}
  >
      <Text style={styles.title}>PONTUAÇÕES</Text>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>
          Melhor pontuação por programa
        </Text>

        {programs.map((program) => {
          const points = getBestScore(program.name);

          return (
            <View
              key={program.id}
              style={styles.scoreRow}
            >
              <View>
                <Text style={styles.programName}>
                  {program.name}
                </Text>

                <Text style={styles.bookName}>
                  {program.book}
                </Text>
              </View>

              <Text style={styles.points}>
                {points}/90
              </Text>
            </View>
          );
        })}
      </View>

       <Pressable
        onPress={onBack}
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.backButtonPressed,
        ]}
      >
        <Text style={styles.backText}>
          Voltar para início
        </Text>
      </Pressable>
        </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 30,
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#49F2F2",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 30,
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
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  boxTitle: {
    color: "white",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 20,
  },

  scoreRow: {
    backgroundColor: "rgba(73,242,242,0.12)",
    borderWidth: 1,
    borderColor: "rgba(73,242,242,0.28)",
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  programName: {
    color: "white",
    fontSize: 18,
    fontWeight: "900",
  },

  bookName: {
    color: "#dffcff",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 3,
  },

  points: {
    color: "#49F2F2",
    fontSize: 22,
    fontWeight: "900",
  },

  backButton: {
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    width: "82%",
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: "center",
  },

  backButtonPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.75,
  },

  backText: {
    color: "white",
    fontSize: 17,
    fontWeight: "800",
  },
});