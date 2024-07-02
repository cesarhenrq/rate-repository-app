import FormContainer from "../FormContainer";
import SignUpForm from "./SignUpForm";
import Loading from "../Loading";

import useSignUp from "../../hooks/useSignUp";

import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const SignUp = () => {
  const {
    signUp,
    result: { loading },
  } = useSignUp();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) return <Loading />;

  return (
    <FormContainer
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ onSubmit }) => <SignUpForm onSubmit={onSubmit} />}
    </FormContainer>
  );
};

export default SignUp;
