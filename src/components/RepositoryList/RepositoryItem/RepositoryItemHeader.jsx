import { View, Image, StyleSheet } from "react-native";

import Text from "../../Texts/Text";
import Subheading from "../../Texts/Subheading";
import LanguagueTag from "../../LanguageTag";

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 20,
  },

  container: {
    flexDirection: "row",
  },

  detailsContainer: {
    flexShrink: 1,
  },

  textContainer: {
    marginBottom: 5,
  },
});

const RepositoryItemHeader = ({
  fullName,
  description,
  ownerAvatarUrl,
  language,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: `${ownerAvatarUrl}` }} />
      <View style={styles.detailsContainer}>
        <Subheading style={styles.textContainer}>{fullName}</Subheading>
        <Text color='textSecondary' style={styles.textContainer}>
          {description}
        </Text>
        <LanguagueTag language={language} />
      </View>
    </View>
  );
};

export default RepositoryItemHeader;
