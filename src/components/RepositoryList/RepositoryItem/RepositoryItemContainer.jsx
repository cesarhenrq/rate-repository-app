import { View, StyleSheet, Pressable } from "react-native";

import { useNavigate } from "react-router-native";

import * as Linking from "expo-linking";

import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryItemRating from "./RepositoryItemRating";
import Button from "../../Buttons/Button";

import theme from "../../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    padding: 15,
  },
});

const RepositoryItemContainer = ({ repository }) => {
  const navigate = useNavigate();

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
    <Pressable onPress={() => navigate(`/repository/${repository.id}`)}>
      <View testID='repositoryItem' style={styles.container}>
        <RepositoryItemHeader {...repositoryItemHeaderProps} />
        <RepositoryItemRating {...repositoryItemRatingProps} />
        {repository.url && (
          <Button
            onPress={() => Linking.openURL(repository.url)}
            text='Open in Github'
            marginTop={10}
          />
        )}
      </View>
    </Pressable>
  );
};

export default RepositoryItemContainer;
