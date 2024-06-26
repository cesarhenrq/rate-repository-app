import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
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

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;
