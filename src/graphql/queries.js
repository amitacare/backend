/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      appointments {
        items {
          id
          doctor_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
      owner
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        appointments {
          nextToken
        }
        createdAt
        updatedAt
        customer
        owner
      }
      nextToken
    }
  }
`;
export const getDoctor = /* GraphQL */ `
  query GetDoctor($id: ID!) {
    getDoctor(id: $id) {
      id
      name
      experience
      image
      speciality
      featured
      price
      orders {
        items {
          id
          doctor_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDoctors = /* GraphQL */ `
  query ListDoctors(
    $filter: ModelDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        experience
        image
        speciality
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
