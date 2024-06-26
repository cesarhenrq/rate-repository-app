import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "../Inputs/TextInput";
import Text from "../Texts/Text";

import theme from "../../theme";

const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error,
    marginBottom: 5,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
