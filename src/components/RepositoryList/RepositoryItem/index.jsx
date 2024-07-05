import { useParams } from "react-router-native";

import Loading from "../../Loading";
import Error from "../../Error";
import RepositoryItemContainer from "./RepositoryItemContainer";

import ReviewListContainer from "../../ReviewList/ReviewListContainer";

import useRepository from "../../../hooks/useRepository";

const RepositoryItem = () => {
  const { id } = useParams();

  const { repository, loading, error, fetchMore } = useRepository({
    id,
    first: 8,
  });

  const handleEndReach = () => {
    fetchMore();
  };

  if (loading || !repository) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <ReviewListContainer
      reviews={repository.reviews.edges}
      ListHeaderComponent={() => (
        <RepositoryItemContainer repository={repository} />
      )}
      onEndReach={handleEndReach}
    />
  );
};

export default RepositoryItem;
