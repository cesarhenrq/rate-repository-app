import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
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
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      fullName
      description
      ownerAvatarUrl
      language
      forksCount
      ratingAverage
      reviewCount
      stargazersCount
      url
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;
