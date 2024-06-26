import Loading from "../Loading";
import Error from "../Error";
import RepositoryListContainer from "./RepositoryListContainer";

import useRepositories from "../../hooks/useRepositories";

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
