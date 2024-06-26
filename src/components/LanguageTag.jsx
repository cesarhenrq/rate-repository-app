import { View, StyleSheet } from "react-native";

import Text from "./Texts/Text";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blue,
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
    flexGrow: 0,
  },

  text: {
    color: "white",
  },
});

const LanguageTag = ({ language }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{language}</Text>
    </View>
  );
};

export default LanguageTag;
