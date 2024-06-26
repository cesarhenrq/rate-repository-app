import { View, ActivityIndicator, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Loading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size='large' color={theme.colors.appBarBackground} />
  </View>
);

export default Loading;
