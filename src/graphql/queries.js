import { gql } from "@apollo/client";

import { REPOSITORY_FIELDS, REVIEW_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      ...RepositoryFields
      url
      reviews {
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
  ${REVIEW_FIELDS}
`;

export const ME = gql`
  query me($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
  ${REVIEW_FIELDS}
`;
