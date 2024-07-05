import { useState } from "react";

import { useDebounce } from "use-debounce";

import Loading from "../Loading";
import Error from "../Error";
import RepositoryListContainer from "./RepositoryListContainer";

import useRepositories from "../../hooks/useRepositories";

const RepositoryList = () => {
  const [order, setOrder] = useState("CREATED_AT, DESC");

  const [search, setSearch] = useState("");
  const [searchKeyword] = useDebounce(search, 1000);

  const [orderBy, orderDirection] = order.split(", ");

  const { repositories, loading, error, fetchMore } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword,
    first: 8,
  });

  const handleOnEndReach = () => {
    fetchMore();
  };

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
      search={search}
      setSearch={setSearch}
      onEndReach={handleOnEndReach}
    />
  );
};

export default RepositoryList;
