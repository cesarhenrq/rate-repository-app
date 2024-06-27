import { View, StyleSheet } from "react-native";

import Rating from "./Rating";
import Subheading from "../Texts/Subheading";
import Text from "../Texts/Text";

import formatDate from "../../utils/formatDate";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    backgroundColor: "white",
  },

  innerContainer: {
    flexShrink: 1,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <Rating rating={review.rating} />
      <View style={styles.innerContainer}>
        <Subheading>{review.user.username}</Subheading>
        <Text color='textSecondary'>{formatDate(review.createdAt)}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
