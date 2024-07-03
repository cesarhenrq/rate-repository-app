import React from "react";

import { FlatList } from "react-native";

import RepositoryItemContainer from "./RepositoryItem/RepositoryItemContainer";
import RepositoryListHeader from "./RepositoryListHeader";
import ItemSeparator from "../ItemSeparator";

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;

    return <RepositoryListHeader {...props} />;
  };

  render() {
    return (
      <FlatList
        data={
          this.props.repositories
            ? this.props.repositories.edges.map((edge) => edge.node)
            : []
        }
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <RepositoryItemContainer key={item.id} repository={item} />
        )}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

export default RepositoryListContainer;
