import { View, StyleSheet } from "react-native";

import Text from "./Texts/Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
  },

  error: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#d73a4a",
  },
});

const Error = ({ error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>Error: {error.message}</Text>
    </View>
  );
};

export default Error;
