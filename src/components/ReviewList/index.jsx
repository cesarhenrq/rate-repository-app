import ReviewListContainer from "./ReviewListContainer";
import Loading from "../Loading";

import useMe from "../../hooks/useMe";

const ReviewList = () => {
  const { data, loading } = useMe({ includeReviews: true });

  if (loading) {
    return <Loading />;
  }

  return <ReviewListContainer reviews={data.me.reviews.edges} />;
};

export default ReviewList;
