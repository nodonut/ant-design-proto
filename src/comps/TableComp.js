// import React from 'react';
// import { Table } from 'antd';
// import { Input } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';
// import {
//   SmileTwoTone,
//   HeartTwoTone,
//   CheckCircleTwoTone,
//   ExclamationCircleTwoTone,
// } from '@ant-design/icons';

// const { Search } = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );

// const onSearch = (value) => console.log(value);

// const columns = [
//   {
//     key: 1,
//     title: 'Score',
//     dataIndex: 'score',
//     defaultSortOrder: 'descend',
//     className: 'show',
//     sorter: (a, b) => a.score - b.score,
//   },
//   {
//     key: 2,
//     title: 'Airline',
//     dataIndex: 'airline',
//     defaultSortOrder: ['ascend'],
//     sorter: (a, b) => a.name - b.name,
//   },
//   {
//     key: 3,
//     title: 'Thermal Screening',
//     dataIndex: 'therm_screen',
//     defaultSortOrder: 'descend',
//   },
//   {
//     key: 4,
//     title: 'Face Masks',
//     dataIndex: 'face_masks',
//   },
//   {
//     key: 5,
//     title: 'Hand Sanitizer',
//     dataIndex: 'hand_san',
//   },
//   {
//     key: 6,
//     title: 'Health Declaration Form',
//     dataIndex: 'health_dec_form',
//   },
// ];

// const data = [
//   {
//     key: '1',
//     score: 3.8,
//     airline: 'AEGEAN AIRLINES',
//     therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
//     health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
//   },
//   {
//     key: '2',
//     score: 4.8,
//     airline: 'AER LINGUS',
//     therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     hand_san: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
//   },
//   {
//     key: '3',
//     score: 3.8,
//     airline: 'AEGEAN AIRLINES',
//     therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
//     health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
//   },
//   {
//     key: '4',
//     score: 3.8,
//     airline: 'AEGEAN AIRLINES',
//     therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
//     health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
//   },
//   {
//     key: '5',
//     score: 3.8,
//     airline: 'AEGEAN AIRLINES',
//     therm_screen: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     face_masks: <CheckCircleTwoTone twoToneColor='#52c41a' />,
//     hand_san: <ExclamationCircleTwoTone twoToneColor='orange' />,
//     health_dec_form: <ExclamationCircleTwoTone twoToneColor='orange' />,
//   },
// ];

// function onChange(pagination, filters, sorter, extra) {
//   console.log('params', pagination, filters, sorter, extra);
// }

// // function TableComp({ pagination, scroll }) {
// //   return (
// //     <Table
// //       pagination={pagination}
// //       scroll={scroll}
// //       columns={columns}
// //       dataSource={data}
// //       onChange={onChange}
// //     />
// //   );
// // }

// export function getColumns() {
//   return columns;
// }

// export function getData() {
//   return data;
// }
