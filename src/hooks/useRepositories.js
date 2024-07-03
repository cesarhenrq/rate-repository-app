import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (order, searchKeyword) => {
  const [repositories, setRepositories] = useState();

  const [orderBy, orderDirection] = order.split(", ");

  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { orderBy, orderDirection, searchKeyword },
  });

  useEffect(() => {
    setRepositories(data?.repositories);
  }, [loading]);

  return { repositories, loading, error };
};

export default useRepositories;
