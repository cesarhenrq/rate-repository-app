import { useQuery } from "@apollo/client";

import { ME } from "../graphql/queries";

const useMe = (options = {}) => {
  const { includeReviews = false } = options;

  const { data, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews },
  });

  return { data, loading };
};

export default useMe;
