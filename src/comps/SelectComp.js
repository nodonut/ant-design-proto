import React, { Component } from 'react';
import { Select } from 'antd';
import { getColumns, getData } from './TableComp';
import { Table } from 'antd';

const { Option } = Select;

const columns = getColumns();
const data = getData();

const children = [];
columns.forEach((column) =>
  children.push(<Option key={+column.key}>{column.title}</Option>)
);

class SelectComp extends Component {
  state = {
    columns: [
      {
        key: '1',
        title: 'Score',
        dataIndex: 'score',
        defaultSortOrder: 'descend',
        className: 'show',
        sorter: (a, b) => a.score - b.score,
      },
      {
        key: '2',
        title: 'Airline',
        dataIndex: 'airline',
        filters: [
          {
            text: 'Airline 1',
            value: 'Airline 1',
          },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
      },
      {
        key: '3',
        title: 'Thermal Screening',
        dataIndex: 'therm_screen',
        defaultSortOrder: 'descend',
      },
      {
        key: '4',
        title: 'Face Masks',
        dataIndex: 'face_masks',
      },
      {
        key: '5',
        title: 'Hand Sanitizer',
        dataIndex: 'hand_san',
      },
      {
        key: '6',
        title: 'Health Declaration Form',
        dataIndex: 'health_dec_form',
      },
    ],
    filteredCols: [],
  };

  handleChange = (value) => {
    this.setState({
      filteredCols: [
        ...this.state.columns.filter((column) => value.includes(column.key)),
      ],
    });
    console.log(value);
  };

  render() {
    return (
      <>
        <Select
          mode='multiple'
          allowClear
          style={{ width: '100%', marginBottom: '2em' }}
          placeholder='Select parameters to display'
          defaultValue={['1', '2', '3', '4', '5']}
          onChange={this.handleChange}
        >
          {children}
        </Select>
        <Table
          columns={
            this.state.filteredCols.length <= 0
              ? this.state.columns
              : this.state.filteredCols
          }
          dataSource={data}
        />
      </>
    );
  }
}

export default SelectComp;
