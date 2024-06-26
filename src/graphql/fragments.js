import { gql } from "@apollo/client";

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFields on Repository {
    id
    fullName
    description
    ownerAvatarUrl
    language
    forksCount
    ratingAverage
    reviewCount
    stargazersCount
  }
`;
