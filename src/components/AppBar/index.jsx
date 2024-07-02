import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import { useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";

import AppBarTab from "./AppBarTab";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: "space-around",
  },
});

const AppBar = () => {
  const { data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  const me = data ? data.me : null;

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <AppBarTab tabName='Repositories' path='/' />
        {me && <AppBarTab tabName='Create a review' path='/create-review' />}
        {me && <AppBarTab tabName='Sign out' path='/signout' />}
        {!me && <AppBarTab tabName='Sign in' path='/signin' />}
        {!me && <AppBarTab tabName='Sign up' path='/signup' />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
