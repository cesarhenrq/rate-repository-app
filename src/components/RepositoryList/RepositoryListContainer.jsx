import { FlatList, Pressable } from "react-native";

import { useNavigate } from "react-router-native";

import RepositoryItemContainer from "./RepositoryItem/RepositoryItemContainer";
import ItemSeparator from "../ItemSeparator";
import OrderPicker from "../OrderPicker";

const RepositoryListContainer = ({ repositories, order, setOrder }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const navigate = useNavigate();

  return (
    <FlatList
      data={repositoryNodes}
      ListHeaderComponent={<OrderPicker order={order} setOrder={setOrder} />}
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
