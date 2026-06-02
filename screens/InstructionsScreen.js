import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

export default function InstructionsScreen({
  onBack,
}) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        COMO JOGAR
      </Text>

      <View style={styles.box}>
        <Text style={styles.text}>
          Escolha um dos programas disponíveis para iniciar o jogo.
        </Text>

        <Text style={styles.text}>
          Cada programa possui 30 perguntas de múltipla escolha relacionadas ao tema “Rumo às Estrelas”.
        </Text>

        <Text style={styles.text}>
          O jogador possui até 3 tentativas para acertar cada pergunta.
        </Text>

        <Text style={styles.text}>
          A pontuação funciona da seguinte forma:
        </Text>

        <Text style={styles.text}>
          • Acerto na 1ª tentativa = 3 pontos{"\n"}
          • Acerto na 2ª tentativa = 2 pontos{"\n"}
          • Acerto na 3ª tentativa = 1 ponto{"\n"}
          • 3 erros = 0 pontos
        </Text>

        <Text style={styles.text}>
          Ao final do programa, sua pontuação total será exibida na tela.
        </Text>

        <Text style={styles.goodLuck}>
          Boa sorte e divirta-se! 🚀
        </Text>
      </View>

      <Pressable
        onPress={onBack}
        style={({ pressed }) => [
          styles.backButton,
          pressed &&
            styles.backButtonPressed,
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

    paddingTop: 48,

    paddingBottom: 90,

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

    textShadowColor:
      "rgba(73,242,242,0.5)",

    textShadowOffset: {
      width: 0,
      height: 0,
    },

    textShadowRadius: 10,
  },

  box: {
    width: "100%",

    backgroundColor:
      "rgba(0,0,0,0.42)",

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.12)",

    borderRadius: 28,

    paddingHorizontal: 26,

    paddingVertical: 32,
  },

  text: {
    color: "white",

    fontSize: 19,

    lineHeight: 31,

    fontWeight: "600",

    textAlign: "left",

    marginBottom: 22,
  },

  goodLuck: {
    color: "#49F2F2",

    fontSize: 22,

    fontWeight: "800",

    textAlign: "center",

    marginTop: 8,
  },

  backButton: {
    marginTop: 12,

    marginBottom: 55,

    backgroundColor:
      "rgba(0,0,0,0.65)",

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.15)",

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