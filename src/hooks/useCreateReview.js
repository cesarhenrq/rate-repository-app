import { useNavigate } from "react-router-native";

import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const navigate = useNavigate();

  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const result = await mutate({
      variables: { repositoryName, ownerName, rating, text },
    });

    navigate(`/repository/${result.data.createReview.repository.id}`);

    return result;
  };

  return { createReview, result };
};

export default useCreateReview;
