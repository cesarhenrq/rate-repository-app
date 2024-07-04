import ReviewListContainer from "./ReviewListContainer";
import Loading from "../Loading";

import useMe from "../../hooks/useMe";
import useDeleteReview from "../../hooks/useDeleteReview";

const ReviewList = () => {
  const { data, loading } = useMe({ includeReviews: true });

  const deleteReview = useDeleteReview();

  const handleDeleteReview = async (id) => {
    const result = await deleteReview(id);

    if (result.data?.deleteReview) {
      data.refetch();
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <ReviewListContainer
      reviews={data.me.reviews.edges}
      onDelete={handleDeleteReview}
    />
  );
};

export default ReviewList;
