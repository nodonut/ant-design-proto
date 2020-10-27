import React, { Component } from 'react';
import { Select } from 'antd';
import { getColumns, getData } from './TableComp';
import { Table } from 'antd';

const { Option, OptGroup } = Select;

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
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
      },
      {
        key: '3',
        title: 'Thermal Screening',
        dataIndex: 'therm_screen',
        defaultSortOrder: 'descend',
        group: 'therm_screen',
      },
      {
        key: '4',
        title: 'Face Masks',
        dataIndex: 'face_masks',
        group: 'face_mask',
      },
      {
        key: '5',
        title: 'Hand Sanitizer',
        dataIndex: 'hand_san',
        group: 'hand_sanitizer',
      },
      {
        key: '6',
        title: 'Health Declaration Form',
        dataIndex: 'health_dec_form',
        group: 'health_dec_form',
      },
    ],
    filteredCols: [],
    defaultValue: ['1', '2', '3', '4', '5', '6'],
  };

  handleChange = (value) => {
    this.setState({
      filteredCols: [
        ...this.state.columns.filter((column) => value.includes(column.key)),
      ],
    });
  };

  handleOptGrpChange = (value) => {
    this.setState({
      filteredCols: [
        ...this.state.columns.filter((column) => column.key === '1'),
        ...this.state.columns.filter((column) => column.key === '2'),
        ...this.state.columns.filter((column) => column.group === value),
      ],
    });
    console.log(this.state.defaultValue);
  };

  render() {
    return (
      <>
        <Select
          placeholder={'Select role'}
          style={{ width: 200, marginBottom: '2em' }}
          onChange={this.handleOptGrpChange}
        >
          <OptGroup label='COVID-19 Safety Protocols'>
            <Option key='face_mask'>Face Mask</Option>
            <Option key='therm_screen'>Thermal Screening</Option>
            <Option key='hand_sanitizer'>Hand Sanitizer</Option>
            <Option key='health_dec_form'>Health Declaration Form</Option>
          </OptGroup>
          <OptGroup label='Traveler Convenience'>
            <Option value='rebook_pol'>Rebooking Policy</Option>
          </OptGroup>
          <OptGroup label='Service Excellence'>
            <Option value='face_shields'>Face Shields</Option>
          </OptGroup>
          <OptGroup label='Traveler Experience'>
            <Option value='onboard_meals'>On Board Meals - Economy</Option>
          </OptGroup>
        </Select>
        ,
        <Select
          mode='multiple'
          allowClear
          style={{ width: '100%', marginBottom: '2em' }}
          placeholder='Select parameters to display'
          defaultValue={this.state.defaultValue}
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
