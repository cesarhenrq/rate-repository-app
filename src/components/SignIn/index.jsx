import Loading from "../Loading";
import SignInContainer from "./SignInContainer";

import * as yup from "yup";

import useSignIn from "../../hooks/useSignIn";

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
    <SignInContainer
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  );
};

export default SignIn;
