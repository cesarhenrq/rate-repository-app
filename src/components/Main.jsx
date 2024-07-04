import Constants from "expo-constants";

import { StyleSheet, View } from "react-native";

import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./RepositoryList";
import RepositoryItem from "./RepositoryList/RepositoryItem";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import CreateReview from "./CreateReview";
import ReviewList from "./ReviewList";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundPrimary,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signout' element={<SignOut />} />
        <Route path='/repository/:id' element={<RepositoryItem />} />
        <Route path='/create-review' element={<CreateReview />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reviews' element={<ReviewList />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;
