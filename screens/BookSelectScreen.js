import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";

import { books } from "../data/questions";

const images = {
  1: require("../assets/programas/programa1.jpeg"),
  2: require("../assets/programas/programa2.jpeg"),
  3: require("../assets/programas/programa3.jpeg"),
  4: require("../assets/programas/programa4.jpeg"),
  5: require("../assets/programas/programa5.jpeg"),
  6: require("../assets/programas/programa6.jpeg")
};

export default function BookSelectScreen({ onSelect, onBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um livro</Text>

      <Text style={styles.subtitle}>
        Selecione um programa para começar
      </Text>

      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {books.map((book) => (
          <Pressable
            key={book.id}
            onPress={() => onSelect(book)}
            style={({ pressed }) => [
              styles.bookCard,
              pressed && styles.bookCardPressed,
            ]}
          >
            <ImageBackground
              source={images[book.id]}
              style={styles.bookImage}
              imageStyle={styles.bookImageRadius}
              resizeMode="cover"
            >
              <View style={styles.overlay}>
                <Text style={styles.bookTitle}>
                  {book.title} - Livro {140 + book.id}
                </Text>

                <Text style={styles.bookSubtitle}>{book.subtitle}</Text>

                <Text style={styles.bookInfo}>30 perguntas</Text>
              </View>
            </ImageBackground>
          </Pressable>
        ))}

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
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 58,
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#49F2F2",
    textAlign: "center",
    letterSpacing: 1.5,
    marginBottom: 2,
    textShadowColor: "rgba(73,242,242,0.5)",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 28,
    fontWeight: "600",
  },

  list: {
    width: "100%",
     flex: 1,
  },

  listContent: {
    paddingBottom: 24,
    alignItems: "center",
  },

  bookCard: {
    width: "100%",
    height: 106,
    borderRadius: 24,
    marginBottom: 10,
    overflow: "hidden",
    shadowColor: "#49F2F2",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },

  bookCardPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.85,
  },

  bookImage: {
    flex: 1,
    justifyContent: "center",
  },

  bookImageRadius: {
    borderRadius: 24,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
    backgroundColor: "rgba(0,0,25,0.48)",
  },

  bookTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 2,
  },

  bookSubtitle: {
    color: "#dffcff",
    fontSize: 14,
    fontWeight: "700",
  },

  bookInfo: {
    color: "#49F2F2",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 6,
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
    bottom: 20,
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