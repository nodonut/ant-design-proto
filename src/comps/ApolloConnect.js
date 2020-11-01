import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';
import React, { useState } from 'react';

import { ApolloProvider } from '@apollo/client';

function TravelData() {
  const { loading, error, data } = client.readQuery(TRAVEL_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  // const arr = data.data.companies.data[0].company_parameter_values_for_employee;

  console.log(data);
  return data.companies.data.forEach((company) => {
    dataTable.push({
      key: +company.id,
      title: company.name,
    });
  });
}

const client = new ApolloClient({
  uri: 'https://dev.app.safetravelbarometer.com/api',
  cache: new InMemoryCache(),
});
const dataTable = [];

client
  .query({
    query: gql`
      query {
        companies {
          data {
            id
            name
          }
        }
      }
    `,
  })
  .then((result) => {
    result.data.companies.data.forEach((company) => {
      return dataTable.push({
        key: +company.id,
        title: company.name,
      });
    });
  });

export default function getDataTable() {
  return dataTable;
}

const TRAVEL_DATA = gql`
  query {
    companies {
      data {
        name
      }
    }
  }
`;
