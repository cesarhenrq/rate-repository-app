import { View, StyleSheet } from "react-native";

import Subheading from "../../../Texts/Subheading";

import theme from "../../../../theme";

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: theme.colors.primary,
  },
});

const Rating = ({ rating }) => {
  return (
    <View style={styles.container}>
      <Subheading style={styles.text}>{rating}</Subheading>
    </View>
  );
};

export default Rating;
