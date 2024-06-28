import Loading from "../Loading";
import FormContainer from "../FormContainer";

import * as yup from "yup";

import useSignIn from "../../hooks/useSignIn";
import SignInForm from "./SignInForm";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const {
    signIn,
    result: { loading },
  } = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <FormContainer
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ onSubmit }) => <SignInForm onSubmit={onSubmit} />}
    </FormContainer>
  );
};

export default SignIn;
