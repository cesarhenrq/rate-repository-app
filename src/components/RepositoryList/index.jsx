import { useState } from "react";

import Loading from "../Loading";
import Error from "../Error";
import RepositoryListContainer from "./RepositoryListContainer";

import useRepositories from "../../hooks/useRepositories";

const RepositoryList = () => {
  const [order, setOrder] = useState("CREATED_AT, DESC");

  console.log(order);

  const { repositories, loading, error } = useRepositories(order);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
    />
  );
};

export default RepositoryList;
