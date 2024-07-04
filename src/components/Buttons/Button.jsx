import { Pressable, StyleSheet } from "react-native";

import Subheading from "../Texts/Subheading";

import theme from "../../theme";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
  },
});

const Button = ({ onPress, text, marginTop, style }) => {
  const buttonStyles = [styles.button, marginTop && { marginTop }, style];

  return (
    <Pressable onPress={onPress} style={buttonStyles}>
      <Subheading style={styles.buttonText}>{text}</Subheading>
    </Pressable>
  );
};

export default Button;
