import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (variables) => {
  const [repository, setRepository] = useState();

  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  useEffect(() => {
    setRepository(data?.repository);
  }, [loading]);

  return { repository, loading, error };
};

export default useRepository;
