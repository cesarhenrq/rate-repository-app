import { Pressable, View, StyleSheet } from "react-native";

import FormikTextInput from "../Formik/FormikTextInput";
import Text from "../Texts/Text";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
  },

  button: {
    backgroundColor: "#0366d6",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
