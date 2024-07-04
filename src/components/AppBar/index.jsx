import { View, StyleSheet, ScrollView } from "react-native";

import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";

import theme from "../../theme";

import useMe from "../../hooks/useMe";

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
  const { data } = useMe();

  const me = data ? data.me : null;

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <AppBarTab tabName='Repositories' path='/' />
        {me && <AppBarTab tabName='Create a review' path='/create-review' />}
        {me && <AppBarTab tabName='My reviews' path='/reviews' />}
        {me && <AppBarTab tabName='Sign out' path='/signout' />}
        {!me && <AppBarTab tabName='Sign in' path='/signin' />}
        {!me && <AppBarTab tabName='Sign up' path='/signup' />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
