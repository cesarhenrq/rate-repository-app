import FormContainer from "../FormContainer";
import CreateReviewForm from "./CreateReviewForm";

import useCreateReview from "../../hooks/useCreateReview";

import * as yup from "yup";

const validationSchema = yup.object().shape({
  repositoryName: yup.string().required("Repository name is required"),
  ownerName: yup.string().required("Owner name is required"),
  rating: yup.number().min(0).max(100).required("Rating is required"),
  review: yup.string(),
});

const initialValues = {
  repositoryName: "",
  ownerName: "",
  rating: "",
  text: "",
};

const CreateReview = () => {
  const { createReview, result } = useCreateReview();

  const onSubmit = async (values) => {
    try {
      const { rating } = values;
      await createReview({ ...values, rating: parseInt(rating) });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormContainer
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ onSubmit }) => (
        <CreateReviewForm onSubmit={onSubmit} loading={result.loading} />
      )}
    </FormContainer>
  );
};

export default CreateReview;
