import { View, StyleSheet } from "react-native";

import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryItemRating from "./RepositoryItemRating";

import theme from "../../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    padding: 15,
  },
});

const RepositoryItem = ({ repository }) => {
  const {
    fullName,
    description,
    ownerAvatarUrl,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
  } = repository;

  const repositoryItemHeaderProps = {
    fullName,
    description,
    ownerAvatarUrl,
    language,
  };

  const repositoryItemRatingProps = {
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
  };

  return (
    <View testID='repositoryItem' style={styles.container}>
      <RepositoryItemHeader {...repositoryItemHeaderProps} />
      <RepositoryItemRating {...repositoryItemRatingProps} />
    </View>
  );
};

export default RepositoryItem;
