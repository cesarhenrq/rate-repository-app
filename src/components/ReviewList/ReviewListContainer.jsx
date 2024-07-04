import { FlatList, StyleSheet } from "react-native";

import ItemSeparator from "../ItemSeparator";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  listHeader: {
    marginBottom: 10,
  },
});

const ReviewListContainer = ({
  reviews,
  ListHeaderComponent = null,
  onDelete = undefined,
}) => (
  <FlatList
    data={reviews}
    renderItem={({ item }) => (
      <ReviewItem review={item.node} onDelete={onDelete} />
    )}
    keyExtractor={({ node }) => node.id}
    ListHeaderComponent={ListHeaderComponent}
    ItemSeparatorComponent={ItemSeparator}
    ListHeaderComponentStyle={styles.listHeader}
  />
);

export default ReviewListContainer;
