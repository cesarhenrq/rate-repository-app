import { useParams } from "react-router-native";

import Loading from "../../Loading";
import Error from "../../Error";
import RepositoryItemContainer from "./RepositoryItemContainer";

import useRepository from "../../../hooks/useRepository";

const RepositoryItem = () => {
  const { id } = useParams();

  const { repository, loading, error } = useRepository({ id });

  if (loading || !repository) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <RepositoryItemContainer repository={repository} />;
};

export default RepositoryItem;
