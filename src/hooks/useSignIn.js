import { useNavigate } from "react-router-native";

import { useMutation, useApolloClient } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";

import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const authStorage = useAuthStorage();

  const apolloClient = useApolloClient();

  const navigate = useNavigate();

  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const result = await mutate({ variables: { username, password } });

    const { accessToken } = result.data.authenticate;

    await authStorage.setAccessToken(accessToken);

    await apolloClient.resetStore();

    navigate("/");

    return result;
  };

  return { signIn, result };
};

export default useSignIn;
