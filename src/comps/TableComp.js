import React from 'react';
import { Table } from 'antd';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

const columns = [
  {
    title: 'Score',
    dataIndex: 'score',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.score - b.score,
  },
  {
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
    title: 'Thermal Screening',
    dataIndex: 'therm_screen',
    defaultSortOrder: 'descend',
  },
  {
    title: 'Face Masks',
    dataIndex: 'face_masks',
  },
  {
    title: 'Hand Sanitizer',
    dataIndex: 'hand_san',
  },
  {
    title: 'Health Declaration Form',
    dataIndex: 'health_dec_form',
  },
];

const data = [
  {
    key: '1',
    score: 3.8,
    airline: 'AEGEAN AIRLINES',
    therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
    health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
  },
  {
    key: '2',
    score: 4.8,
    airline: 'AER LINGUS',
    therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    hand_san: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
  },
  {
    key: '3',
    score: 3.8,
    airline: 'AEGEAN AIRLINES',
    therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
    health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
  },
  {
    key: '4',
    score: 3.8,
    airline: 'AEGEAN AIRLINES',
    therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
    health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
  },
  {
    key: '5',
    score: 3.8,
    airline: 'AEGEAN AIRLINES',
    therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
    hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
    health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

// function TableComp({ pagination, scroll }) {
//   return (
//     <Table
//       pagination={pagination}
//       scroll={scroll}
//       columns={columns}
//       dataSource={data}
//       onChange={onChange}
//     />
//   );
// }

export function getColumns() {
  return columns;
}

export function getData() {
  return data;
}
