import { FlatList, View, StyleSheet, Pressable } from "react-native";

import { useNavigate } from "react-router-native";

import RepositoryItemContainer from "./RepositoryItem/RepositoryItemContainer";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const navigate = useNavigate();

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItemContainer key={item.id} repository={item} />
        </Pressable>
      )}
    />
  );
};

export default RepositoryListContainer;
