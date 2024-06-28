import { View, StyleSheet } from "react-native";

import FormikTextInput from "../Formik/FormikTextInput";
import Button from "../Buttons/Button";
import Loading from "../Loading";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
  },
});

const CreateReviewForm = ({ onSubmit, loading }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput
        name='rating'
        keyboardType='numeric'
        placeholder='Rating between 0 and 100'
      />
      <FormikTextInput name='text' placeholder='Review' multiline />
      {loading ? (
        <Loading />
      ) : (
        <Button onPress={onSubmit} text='Create a review' marginTop={10} />
      )}
    </View>
  );
};

export default CreateReviewForm;
