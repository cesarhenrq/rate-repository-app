import { View, StyleSheet } from "react-native";

import { Link } from "react-router-native";

import Subheading from "../Texts/Subheading";

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
});

const AppBarTab = ({ tabName, path }) => {
  return (
    <View style={styles.container}>
      <Link to={path}>
        <Subheading color='white'>{tabName}</Subheading>
      </Link>
    </View>
  );
};

export default AppBarTab;
