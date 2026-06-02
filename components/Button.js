import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function Button({
  title,
  onPress,
  secondary,
  small,
}) {
  return (
    <TouchableOpacity
      style={[
        secondary
          ? styles.secondaryButton
          : styles.mainButton,

        small && styles.smallButton,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={
          secondary
            ? styles.secondaryText
            : styles.buttonText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: "#7B61FF",

    width: "100%",

    paddingVertical: 20,

    borderRadius: 40,

    alignItems: "center",

    marginBottom: 18,

    shadowColor: "#7B61FF",
    shadowOpacity: 0.55,
    shadowRadius: 12,

    elevation: 10,
  },

  secondaryButton: {
    backgroundColor: "rgba(0,0,0,0.45)",

    width: "100%",

    paddingVertical: 16,

    borderRadius: 40,

    alignItems: "center",

    marginBottom: 10,

    borderWidth: 1,

    borderColor: "rgba(255,255,255,0.08)",
  },

  smallButton: {
    width: "92%",
  },

  buttonText: {
    color: "white",

    fontSize: 18,

    fontWeight: "800",

    letterSpacing: 1,
  },

  secondaryText: {
    color: "white",

    fontSize: 18,

    fontWeight: "700",
  },
});