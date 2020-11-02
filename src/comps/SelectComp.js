import React, { Component } from 'react';
import { Select, Table, Input, Tooltip } from 'antd';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from '@ant-design/icons';
import { getCategory } from './HeaderComp';

///////////////////////////
const client = new ApolloClient({
  uri: 'https://dev.app.safetravelbarometer.com/api',
  cache: new InMemoryCache(),
});
const dataTable = [];

///////////////////////////
const { Option, OptGroup } = Select;

const children = [
  {
    key: '01',
    dataIndex: 'imageurl',
    render: (theImageURL) => <img src={theImageURL} height={50} width={50} />,
  },
  {
    key: '02',
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    key: '03',
    title: 'Rating',
    dataIndex: 'rating',
    sorter: (a, b) => a.rating - b.rating,
    sortDirections: ['descend'],
  },
];

let curCat = getCategory();
console.log(curCat);

const paramContainer = [];
let columnIds = [];
let pageNumber = 1;
let category = 'Airlines';
let defValHolder = [];

class SelectComp extends Component {
  state = {
    columns: [...children],
    filteredCols: [],
    defaultValue: [...defValHolder],
    columnIds,
    data: [],
    pagination: {
      current: 1,
    },
    loading: false,
    buckets: [],
    searchInput: '',
    countries: [],
    category,
    airlineCols: [],
  };

  componentDidMount() {
    this.loadData();
    this.populateBuckets();
    this.populateCountrySelect();
    this.setState({ defaultValue: [...columnIds] });
  }

  loadData(num = 1) {
    this.setState({ loading: true });
    const query = gql`
      query companies($page: Int!, $category: Mixed!) {
        companies(
          page: $page
          first: 100
          hasCategory: { column: NAME, value: $category }
        ) {
          paginatorInfo {
            perPage
            hasMorePages
            currentPage
            total
          }
          data {
            id
            name
            logo
            rating
            category {
              id
              name
            }
            all_company_parameter_values {
              parameter {
                name
                id
              }
              value
              value_text
            }
          }
        }
      }
    `;
    client
      .query({
        query: query,
        variables: {
          page: num,
          category: this.state.category,
        },
      })
      .then((result) => {
        console.log(result);
        let currentPage = result.data.companies.paginatorInfo.currentPage;
        let totalPage = result.data.companies.paginatorInfo.total;
        result.data.companies.data.forEach((company) => {
          if (company.category.name === this.state.category) {
            let singleData = {
              key: company.id,
              rating: company.rating,
              imageurl: company.logo,
              name: company.name,
              category: company.category.name,
            };
            const { all_company_parameter_values } = company;
            let value = '';
            let valueText;
            all_company_parameter_values.forEach((comp) => {
              value = comp.value;
              valueText = comp.value_text;
              singleData[
                comp.parameter.name.toLowerCase().replace(/[ ]/g, '_')
              ] = value;
            });
            return dataTable.push(singleData);
          }
        });
        this.setState({
          loading: false,
          data: dataTable,
          pagination: {
            current: currentPage,
            total: totalPage,
          },
        });
      });
  }

  handleTableChange(page) {
    console.log(page);
    const query = gql`
      query companies($page: Int!, $pageSize: Int!, $category: Mixed!) {
        companies(
          page: $page
          first: $pageSize
          hasCategory: { column: NAME, value: $category }
        ) {
          paginatorInfo {
            perPage
            hasMorePages
            currentPage
            total
          }
          data {
            id
            name
            logo
            rating
            category {
              id
              name
            }
            all_company_parameter_values {
              parameter {
                name
                id
              }
              value
              value_text
            }
          }
        }
      }
    `;
    client
      .query({
        query: query,
        variables: {
          page: page.current,
          pageSize: page.pageSize,
          category: this.state.category,
        },
      })
      .then((result) => {
        let totalPage = result.data.companies.paginatorInfo.total;
        let currentPage = result.data.companies.paginatorInfo.currentPage;
        let currentData = [];
        result.data.companies.data.forEach((company) => {
          if (company.category.name === this.state.category) {
            let singleData = {
              key: company.id,
              rating: company.rating,
              imageurl: company.logo,
              name: company.name,
              category: company.category.name,
            };
            const { all_company_parameter_values } = company;
            let value = '';
            let valueText;
            all_company_parameter_values.forEach((comp) => {
              value = comp.value;
              valueText = comp.value_text;
              singleData[
                comp.parameter.name.toLowerCase().replace(/[ ]/g, '_')
              ] = value;
            });
            return currentData.push(singleData);
          }
        });
        this.setState({
          loading: false,
          data: currentData,
          pagination: {
            current: currentPage,
            total: totalPage,
          },
        });
      });
  }

  handleChange = (value) => {
    console.log(value);
    this.setState({
      filteredCols: [
        ...children.filter((column) => column.dataIndex === 'imageurl'),
        ...children.filter((column) => column.title === 'Name'),
        ...children.filter((column) => column.title === 'Rating'),
        ...children.filter((column) => value.includes(column.key)),
      ],
    });
  };

  populateBuckets() {
    client
      .query({
        query: gql`
          query {
            buckets {
              id
              name
              description
              parameters {
                id
                name
                category {
                  id
                  name
                }
                description
              }
            }
          }
        `,
      })
      .then((result) => {
        let currentBucket = [];
        result.data.buckets.forEach((bucket) => {
          const { id, name } = bucket;
          const { parameters } = bucket;
          parameters.forEach((param) => {
            if (param.category.name === this.state.category) {
              children.push({
                key: param.id,
                title: param.name,
                dataIndex: param.name.toLowerCase().replace(/[ ]/g, '_'),
                group: param.name.toLowerCase(),
                category: param.category.name,
              });
            }
          });

          children.forEach((column) => {
            if (
              column.category === this.state.category &&
              defValHolder.length < 6
            ) {
              defValHolder.push(column.key);
            }
          });

          let paramOptions = [];
          parameters.forEach((param) => {
            paramOptions.push(
              <Option key={param.id} value={param.id}>
                {param.name}
              </Option>
            );
          });
          currentBucket.push(
            <OptGroup key={id} label={name}>
              {paramOptions}
            </OptGroup>
          );

          paramOptions = [];
        });

        this.setState({
          buckets: currentBucket,
          filteredCols: [
            ...children.slice(0, 3),
            ...children.filter((column) => defValHolder.includes(column.key)),
          ],
        });
      });
  }

  handleSearch(value) {
    this.setState({ loading: true });

    // Query
    const query = gql`
      query($searchInput: Mixed!, $category: Mixed!) {
        companies(
          where: { column: NAME, value: $searchInput }
          hasCategory: { column: NAME, value: $category }
        ) {
          data {
            id
            name
            logo
            rating
            category {
              id
              name
            }
            all_company_parameter_values {
              parameter {
                name
                id
              }
              value
              value_text
            }
          }
        }
      }
    `;

    client
      .query({
        query: query,
        variables: {
          searchInput: value,
          category: category,
        },
      })
      .then((result) => {
        let currentData = [];
        result.data.companies.data.forEach((company) => {
          let singleData = {
            key: company.id,
            rating: company.rating,
            imageurl: company.logo,
            name: company.name,
            category: company.category.name,
          };
          if (company.category.name === this.state.category) {
            const { all_company_parameter_values } = company;
            let value = '';
            all_company_parameter_values.forEach((comp) => {
              value = comp.value;
              singleData[
                comp.parameter.name.toLowerCase().replace(/[ ]/g, '_')
              ] = value;
            });
            return currentData.push(singleData);
          }
        });
        this.setState({
          loading: false,
          data: currentData,
        });
      })
      .catch((err) => this.loadData());
  }

  populateCountrySelect() {
    const query = gql`
      query {
        countries {
          name
        }
      }
    `;
    client
      .query({
        query: query,
      })
      .then((result) => {
        let curCountry = [];
        result.data.countries.forEach((country, index) => {
          return curCountry.push(
            <Option key={index + 1} value={country.name.toLowerCase()}>
              {country.name}
            </Option>
          );
        });
        this.setState({
          countries: [...curCountry],
        });
      });
  }

  countrySearch(value) {
    this.state.countries.forEach((country) => {
      if (country.props.value === value) {
        this.setState({ countries: [country] });
      }
    });
  }

  selectCountrySearch(value) {
    const query = gql`
      query($country: Mixed!, $category: Mixed!) {
        companies(
          hasCountry: { column: NAME, value: $country }
          hasCategory: { column: NAME, value: $category }
        ) {
          data {
            id
            name
            rating
            logo
            category {
              id
              name
            }
            all_company_parameter_values {
              parameter {
                name
                id
              }
              value
              value_text
            }
          }
        }
      }
    `;

    client
      .query({
        query: query,
        variables: {
          country: value,
          category: this.state.category,
        },
      })
      .then((result) => {
        let currentData = [];
        result.data.companies.data.forEach((company) => {
          let singleData = {
            key: company.id,
            rating: company.rating,
            imageurl: company.logo,
            name: company.name,
            category: company.category.name,
          };
          if (company.category.name === this.state.category) {
            const { all_company_parameter_values } = company;
            let value = '';
            let valueText = '';
            all_company_parameter_values.forEach((comp) => {
              value = comp.value;
              valueText = comp.value_text;
              singleData[
                comp.parameter.name.toLowerCase().replace(/[ ]/g, '_')
              ] = value;
            });
            return currentData.push(singleData);
          }
        });
        this.setState({
          loading: false,
          data: currentData,
        });
      })
      .catch((err) => this.loadData());
  }

  render() {
    return (
      <>
        <Select
          mode='multiple'
          style={{ width: '100%', marginBottom: '1em' }}
          placeholder='Select parameters'
          onChange={this.handleChange}
          defaultValue={defValHolder}
        >
          {this.state.buckets}
        </Select>
        <Select
          showSearch
          style={{ width: 200, marginTop: '1em' }}
          placeholder='Select country'
          onSearch={(value) => this.selectCountrySearch(value)}
        >
          {this.state.countries}
        </Select>
        ,
        <Input
          placeholder='Search'
          bordered={false}
          style={{ marginBottom: '2em', left: '80%' }}
          onChange={(e) => this.handleSearch(e.target.value)}
        />
        <Table
          columns={this.state.filteredCols}
          dataSource={this.state.data}
          loading={this.state.loading}
          pagination={this.state.pagination}
          onChange={(page) => this.handleTableChange(page)}
        />
      </>
    );
  }
}

export default SelectComp;

////
// <Select
// placeholder={'Select role'}
// style={{ width: 200, marginBottom: '2em' }}
// onChange={this.handleOptGrpChange}
// >
// <OptGroup label='COVID-19 Safety Protocols'>
//   <Option key='face_mask'>Face Mask</Option>
//   <Option key='therm_screen'>Thermal Screening</Option>
//   <Option key='hand_sanitizer'>Hand Sanitizer</Option>
//   <Option key='health_dec_form'>Health Declaration Form</Option>
// </OptGroup>
// <OptGroup label='Traveler Convenience'>
//   <Option value='rebook_pol'>Rebooking Policy</Option>
// </OptGroup>
// <OptGroup label='Service Excellence'>
//   <Option value='face_shields'>Face Shields</Option>
// </OptGroup>
// <OptGroup label='Traveler Experience'>
//   <Option value='onboard_meals'>On Board Meals - Economy</Option>
// </OptGroup>
// </Select>
// ,

// <Select
//   style={{ width: 120, float: 'right', marginTop: '1em' }}
//   placeholder='Sort Order'
//   onChange={(value) => this.sorter(value)}
// >
//   <Option value='ascend'>Ascending</Option>
//   <Option value='descend'>Descending</Option>
// </Select>
