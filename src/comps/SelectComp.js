import React, { Component } from 'react';
import { Select, Table, Input, Tooltip } from 'antd';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from '@ant-design/icons';

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
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    key: '02',
    dataIndex: 'imageurl',
    render: (theImageURL) => <img src={theImageURL} />,
  },
  {
    key: '03',
    title: 'Rating',
    dataIndex: 'rating',
  },
];

const paramContainer = [];
let cat = '';
let columnTitles = [];
let pageNumber = 1;

class SelectComp extends Component {
  state = {
    columns: [...children],
    filteredCols: [],
    defaultValue: [],
    columnIds: [],
    data: [],
    pagination: {
      current: 1,
    },
    loading: false,
    buckets: [],
    searchInput: '',
    countries: [],
    category: 'airlines',
    airlineCols: [],
  };

  componentDidMount() {
    this.loadData();
    this.populateBuckets();
    this.populateCountrySelect();
  }

  loadData(num = 1) {
    this.setState({ loading: true });
    const query = gql`
      query companies($page: Int!) {
        companies(page: $page, first: 100) {
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
            company_parameter_values_for_employee {
              parameter {
                role
                name
              }
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
        },
      })
      .then((result) => {
        console.log(result);
        let totalPage = result.data.companies.paginatorInfo.total;
        result.data.companies.data.forEach((company) => {
          if (company.category.name.toLowerCase() === this.state.category) {
            return dataTable.push({
              key: company.id,
              rating: company.rating,
              imageurl: company.logo,
              name: company.name,
              category: company.category.name,
              thermal_screening: <CheckCircleTwoTone twoToneColor='#52c41a' />,

              face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
              hand_sanitizer: (
                <ExclamationCircleTwoTone twoToneColor='orange' />
              ),
              health_dec_form: (
                <ExclamationCircleTwoTone twoToneColor='orange' />
              ),
              test_bucket_parameter: (
                <ExclamationCircleTwoTone twoToneColor='orange' />
              ),
            });
          }
        });
        this.setState({
          category: cat,
          loading: false,
          data: dataTable,
          pagination: {
            total: totalPage,
          },
        });
      });
  }

  handleTableChange(page) {
    const query = gql`
      query companies($page: Int!, $pageSize: Int!) {
        companies(page: $page, first: $pageSize) {
          paginatorInfo {
            perPage
            hasMorePages
            currentPage
            total
          }
          data {
            id
            name
            rating
            company_parameter_values_for_employee {
              parameter {
                role
                name
              }
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
        },
      })
      .then((result) => {
        let totalPage = result.data.companies.paginatorInfo.total;
        let currentData = [];
        result.data.companies.data.forEach((company) => {
          return currentData.push({
            key: company.id,
            rating: company.rating,
            name: company.name,
            therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
            face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
            hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
            health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
          });
        });
        this.setState({
          loading: false,
          data: currentData,
          pagination: {
            total: totalPage,
          },
        });
      });
  }

  // sorterFunctionASC() {
  //   client
  //     .query({
  //       query: gql`
  //         query {
  //           companies(orderBy: { field: NAME, order: ASC }, first: 100) {
  //             paginatorInfo {
  //               perPage
  //               hasMorePages
  //               currentPage
  //               total
  //             }
  //             data {
  //               id
  //               name
  //               rating
  //               company_parameter_values_for_employee {
  //                 parameter {
  //                   role
  //                   name
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       `,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       let totalPage = result.data.companies.paginatorInfo.total;
  //       let currentData = [];
  //       result.data.companies.data.forEach((company) => {
  //         return currentData.push({
  //           key: company.id,
  //           rating: company.rating,
  //           name: company.name,
  //           therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
  //           face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
  //           hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
  //           health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
  //         });
  //       });
  //       this.setState({
  //         loading: false,
  //         data: currentData,
  //         pagination: {
  //           total: totalPage,
  //         },
  //       });
  //     });
  // }

  // sorterFunctionDESC() {
  //   client
  //     .query({
  //       query: gql`
  //         query {
  //           companies(orderBy: { field: NAME, order: DESC }, first: 100) {
  //             paginatorInfo {
  //               perPage
  //               hasMorePages
  //               currentPage
  //               total
  //             }
  //             data {
  //               id
  //               name
  //               rating
  //               company_parameter_values_for_employee {
  //                 parameter {
  //                   role
  //                   name
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       `,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       let totalPage = result.data.companies.paginatorInfo.total;
  //       let currentData = [];
  //       result.data.companies.data.forEach((company) => {
  //         return currentData.push({
  //           key: company.id,
  //           rating: company.rating,
  //           name: company.name,
  //           therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
  //           face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
  //           hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
  //           health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
  //         });
  //       });
  //       this.setState({
  //         loading: false,
  //         data: currentData,
  //         pagination: {
  //           total: totalPage,
  //         },
  //       });
  //     });
  // }

  // sorter(value) {
  //   if (value === 'ascend') {
  //     this.sorterFunctionASC();
  //   } else if (value === 'descend') {
  //     this.sorterFunctionDESC();
  //   }
  // }

  handleChange = (value) => {
    this.setState({
      filteredCols: [
        ...children.filter((column) => column.title === 'Score'),
        ...children.filter((column) => column.title === 'Name'),
        ...children.filter((column) => value.includes(column.key)),
      ],
    });
  };

  // handleOptGrpChange = (value) => {
  //   this.setState({
  //     filteredCols: [
  //       ...children.filter((column) => column.name === 'score'),
  //       ...children.filter((column) => column.name === 'name'),
  //       ...children.filter((column) => column.group === value),
  //     ],
  //   });
  // };

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
          parameters.forEach((param) =>
            children.push({
              key: param.id,
              title: param.name,
              dataIndex: param.name.toLowerCase().replace(/[ ]/g, '_'),
              group: param.name.toLowerCase(),
              category: param.category.name.toLowerCase(),
            })
          );
          children.forEach((column) => {
            if (this.state.category === column.category) {
              this.state.airlineCols.push(column);
              columnTitles.push(column.title);
            }
          });
          let paramOptions = [];
          parameters.forEach((param) => {
            paramOptions.push(<Option key={param.id}>{param.name}</Option>);
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
            ...children.filter((column) => column.dataIndex === 'imageurl'),
            ...children.filter((column) => column.title === 'Name'),
            ...children.filter((column) => column.title === 'Rating'),
            ...this.state.airlineCols.slice(0, 5),
          ],
          defaultValue: [...columnTitles.slice(0, 5)],
        });
      });
  }

  handleSearch(value) {
    this.setState({ loading: true });

    // Query
    const query = gql`
      query($searchInput: Mixed!) {
        companies(where: { column: NAME, value: $searchInput }) {
          data {
            id
            name
            logo
            rating
          }
        }
      }
    `;

    client
      .query({
        query: query,
        variables: {
          searchInput: value,
        },
      })
      .then((result) => {
        let currentData = [];
        result.data.companies.data.forEach((company) => {
          return currentData.push({
            key: company.id,
            rating: company.rating,
            imageurl: company.logo,
            name: company.name,
            thermal_screening: <CheckCircleTwoTone twoToneColor='#52c41a' />,
            face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
            hand_sanitizer: <ExclamationCircleTwoTone twoToneColor='orange' />,
            health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
          });
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
      query($country: Mixed!) {
        companies(hasCountry: { column: NAME, value: $country }) {
          data {
            id
            name
            rating
            logo
          }
        }
      }
    `;

    client
      .query({
        query: query,
        variables: {
          country: value,
        },
      })
      .then((result) => {
        let currentData = [];
        result.data.companies.data.forEach((company) => {
          return currentData.push({
            key: company.id,
            rating: company.rating,
            imageurl: company.logo,
            name: company.name,
            thermal_screening: <CheckCircleTwoTone twoToneColor='#52c41a' />,
            face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
            hand_sanitizer: <ExclamationCircleTwoTone twoToneColor='orange' />,
            health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
          });
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
          defaultValue={this.state.defaultValue}
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
