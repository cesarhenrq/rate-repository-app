import { useNavigate } from "react-router-native";

import { useMutation } from "@apollo/client";

import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const navigate = useNavigate();

  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    await mutate({ variables: { id } });

    navigate("/");

    return result;
  };

  return deleteReview;
};

export default useDeleteReview;
