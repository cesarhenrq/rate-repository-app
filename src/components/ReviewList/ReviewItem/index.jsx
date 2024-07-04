import { View, StyleSheet, Alert } from "react-native";

import { useNavigate } from "react-router-native";

import Rating from "./Rating";
import Subheading from "../../Texts/Subheading";
import Text from "../../Texts/Text";
import Button from "../../Buttons/Button";

import formatDate from "../../../utils/formatDate";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: "white",
  },

  infoContainer: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },

  innerContainer: {
    flexShrink: 1,
  },

  buttonsContainer: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
  },

  button: {
    flexGrow: 1,
  },

  deleteButton: {
    backgroundColor: "red",
  },
});

const ReviewItem = ({ review, onDelete = undefined }) => {
  const navigate = useNavigate();

  const DeleteAlert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => onDelete(review.id),
        },
      ]
    );

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Rating rating={review.rating} />
        <View style={styles.innerContainer}>
          <Subheading>
            {review?.repository?.fullName || review.user.username}
          </Subheading>
          <Text color='textSecondary'>{formatDate(review.createdAt)}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {review.repository && (
        <View style={styles.buttonsContainer}>
          <Button
            text='View repository'
            onPress={() => navigate(`/repository/${review.repository.id}`)}
            style={styles.button}
          />
          <Button
            text='Delete review'
            onPress={DeleteAlert}
            style={[styles.button, styles.deleteButton]}
          />
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
