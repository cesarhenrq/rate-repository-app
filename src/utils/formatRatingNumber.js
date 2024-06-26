const formatRatingNumber = (rating) => {
  if (rating >= 1000) {
    return `${Math.round(rating / 100) / 10}k`;
  }

  return rating;
};

export default formatRatingNumber;
