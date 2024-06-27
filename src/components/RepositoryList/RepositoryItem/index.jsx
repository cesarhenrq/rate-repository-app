import { FlatList, StyleSheet } from "react-native";

import { useParams } from "react-router-native";

import Loading from "../../Loading";
import Error from "../../Error";
import RepositoryItemContainer from "./RepositoryItemContainer";
import ItemSeparator from "../../ItemSeparator";
import ReviewItem from "../../ReviewItem";

import useRepository from "../../../hooks/useRepository";

const styles = StyleSheet.create({
  listHeader: {
    marginBottom: 10,
  },
});

const RepositoryItem = () => {
  const { id } = useParams();

  const { repository, loading, error } = useRepository({ id });

  if (loading || !repository) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <FlatList
      data={repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => (
        <RepositoryItemContainer repository={repository} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponentStyle={styles.listHeader}
    />
  );
};

export default RepositoryItem;
