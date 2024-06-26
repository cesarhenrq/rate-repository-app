import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";

import SignInContainer from "../../components/SignIn/SignInContainer";

import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

describe("SignIn", () => {
  describe("SignInContainer", () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
      render(
        <SignInContainer
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      );

      screen.debug();
    });

    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      fireEvent.changeText(screen.getByPlaceholderText("Username"), "username");
      fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");
      fireEvent.press(screen.getByText("Sign in"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "username",
          password: "password",
        });
      });
    });
  });
});
