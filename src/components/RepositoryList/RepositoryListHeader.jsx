import { StyleSheet } from "react-native";

import { Searchbar } from "react-native-paper";

import OrderPicker from "../OrderPicker";

const styles = StyleSheet.create({
    searchbar: {
      margin: 10,
      backgroundColor: "white",
    },
  });

const RepositoryListHeader = ({ order, setOrder, search, setSearch }) => {
  return (
    <>
      <OrderPicker order={order} setOrder={setOrder} />
      <Searchbar
        placeholder='Search...'
        onChangeText={setSearch}
        value={search}
        style={styles.searchbar}
      />
    </>
  );
};

export default RepositoryListHeader;
