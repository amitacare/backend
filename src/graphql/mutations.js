/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createDoctor = /* GraphQL */ `
  mutation CreateDoctor(
    $input: CreateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    createDoctor(input: $input, condition: $condition) {
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
export const updateDoctor = /* GraphQL */ `
  mutation UpdateDoctor(
    $input: UpdateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    updateDoctor(input: $input, condition: $condition) {
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
export const deleteDoctor = /* GraphQL */ `
  mutation DeleteDoctor(
    $input: DeleteDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    deleteDoctor(input: $input, condition: $condition) {
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
export const createBookAppointment = /* GraphQL */ `
  mutation CreateBookAppointment(
    $input: CreateBookAppointmentInput!
    $condition: ModelBookAppointmentConditionInput
  ) {
    createBookAppointment(input: $input, condition: $condition) {
      id
      doctor_id
      order_id
      doctor {
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
      order {
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
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateBookAppointment = /* GraphQL */ `
  mutation UpdateBookAppointment(
    $input: UpdateBookAppointmentInput!
    $condition: ModelBookAppointmentConditionInput
  ) {
    updateBookAppointment(input: $input, condition: $condition) {
      id
      doctor_id
      order_id
      doctor {
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
      order {
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
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteBookAppointment = /* GraphQL */ `
  mutation DeleteBookAppointment(
    $input: DeleteBookAppointmentInput!
    $condition: ModelBookAppointmentConditionInput
  ) {
    deleteBookAppointment(input: $input, condition: $condition) {
      id
      doctor_id
      order_id
      doctor {
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
      order {
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
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
    }
  }
`;
