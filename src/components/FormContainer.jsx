import { Formik } from "formik";

const FormContainer = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => children({ onSubmit: handleSubmit })}
    </Formik>
  );
};

export default FormContainer;
