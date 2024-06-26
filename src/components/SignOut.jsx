import { useEffect } from "react";

import Loading from "./Loading";

import { useNavigate } from "react-router-native";

import { useApolloClient } from "@apollo/client";

import useAuthStorage from "../hooks/useAuthStorage";

const SignOut = () => {
  const authStorage = useAuthStorage();

  const apolloClient = useApolloClient();

  const navigate = useNavigate();

  useEffect(() => {
    const signOut = async () => {
      await authStorage.removeAccessToken();

      await apolloClient.resetStore();

      navigate("/");

      return;
    };

    signOut();
  }, []);

  return <Loading />;
};

export default SignOut;
