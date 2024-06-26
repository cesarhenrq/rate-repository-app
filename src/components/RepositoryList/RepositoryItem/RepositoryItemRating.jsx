import { View, StyleSheet } from "react-native";

import Text from "../../Texts/Text";
import Subheading from "../../Texts/Subheading";

import formatRatingNumber from "../../../utils/formatRatingNumber";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },

  innerContainer: {
    alignItems: "center",
  },
});

const RepositoryItemRating = ({
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Subheading>{formatRatingNumber(stargazersCount)}</Subheading>
        <Text color='textSecondary'>Starts</Text>
      </View>
      <View style={styles.innerContainer}>
        <Subheading>{formatRatingNumber(forksCount)}</Subheading>
        <Text color='textSecondary'>Forks</Text>
      </View>
      <View style={styles.innerContainer}>
        <Subheading>{formatRatingNumber(reviewCount)}</Subheading>
        <Text color='textSecondary'>Reviews</Text>
      </View>
      <View style={styles.innerContainer}>
        <Subheading>{formatRatingNumber(ratingAverage)}</Subheading>
        <Text color='textSecondary'>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryItemRating;
