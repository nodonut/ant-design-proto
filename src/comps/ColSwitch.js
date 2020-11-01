// import React, { Component } from 'react';
// import { Table, Switch, Radio, Form, Space } from 'antd';
// import TableComp from './TableComp';
// import { getColumns, getData } from './TableComp';

// const data = getData();

// const showHeader = true;
// const pagination = { position: 'bottom' };

// class ColSwitch extends Component {
//   state = {
//     pagination,
//     size: 'default',
//     showHeader,
//     scroll: undefined,
//     hasData: true,
//     tableLayout: undefined,
//     top: 'none',
//     bottom: 'bottomRight',
//     column: [
//       {
//         title: 'Score',
//         dataIndex: 'score',
//         defaultSortOrder: 'descend',
//         className: 'show',
//         sorter: (a, b) => a.score - b.score,
//       },
//       {
//         title: 'Airline',
//         dataIndex: 'airline',
//         filters: [
//           {
//             text: 'Airline 1',
//             value: 'Airline 1',
//           },
//         ],
//         // specify the condition of filtering result
//         // here is that finding the name started with `value`
//         onFilter: (value, record) => record.name.indexOf(value) === 0,
//         sorter: (a, b) => a.name.length - b.name.length,
//         sortDirections: ['descend'],
//       },
//       {
//         title: 'Thermal Screening',
//         dataIndex: 'therm_screen',
//         defaultSortOrder: 'descend',
//       },
//       {
//         title: 'Face Masks',
//         dataIndex: 'face_masks',
//       },
//       {
//         title: 'Hand Sanitizer',
//         dataIndex: 'hand_san',
//       },
//       {
//         title: 'Health Declaration Form',
//         dataIndex: 'health_dec_form',
//       },
//     ],
//   };

//   handleSizeChange = (e) => {
//     this.setState({ size: e.target.value });
//   };

//   handleEllipsisChange = (enable) => {
//     this.setState({ ellipsis: enable });
//   };

//   handleHeaderChange = (enable) => {
//     this.setState({ showHeader: enable ? showHeader : false });
//   };

//   handleYScrollChange = (enable) => {
//     this.setState({ yScroll: enable });
//   };

//   handleXScrollChange = (e) => {
//     this.setState({ xScroll: e.target.value });
//   };

//   handleDataChange = (hasData) => {
//     this.setState({ hasData });
//   };

//   onChangeScore = () => {
//     const arr = getColumns();
//     const oldState = [...this.state.column];
//     if (this.state.column[0].dataIndex === 'score') {
//       this.setState({
//         column: [...this.state.column.filter((item) => item.title !== 'Score')],
//       });
//     } else {
//       this.setState({
//         column: [...arr],
//       });
//     }
//   };

//   onChangeAirline = () => {
//     const arr = getColumns();
//     const oldState = [...this.state.column];
//     if (this.state.column[1].dataIndex === 'airline') {
//       this.setState({
//         column: [
//           ...this.state.column.filter((item) => item.title !== 'Airline'),
//         ],
//       });
//     } else {
//       this.setState({
//         column: [...arr],
//       });
//     }
//   };

//   onClick = (checked, event) => {
//     console.log(this.state.column);
//   };
//   render() {
//     const { xScroll, yScroll, ...state } = this.state;

//     const scroll = {};
//     if (yScroll) {
//       scroll.y = 240;
//     }
//     if (xScroll) {
//       scroll.x = '100vw';
//     }

//     return (
//       <>
//         <Form
//           className='components-table-demo-control-bar'
//           style={{ marginBottom: 16 }}
//         >
//           <Form.Item label='Score' className='form_item__header'>
//             <Switch
//               checked={this.state.column[0].dataIndex === 'score'}
//               onChange={this.onChangeScore}
//               className='score header'
//               onClick={this.onClick}
//             />
//           </Form.Item>
//           <Form.Item label='Airline' className='form_item__header'>
//             <Switch
//               checked={this.state.column.find(
//                 (item) => item.title === 'Airline'
//               )}
//               onChange={this.onChangeAirline}
//               className='airline header'
//               onClick={this.onClick}
//             />
//           </Form.Item>
//           <Form.Item label='Size'>
//             <Radio.Group value={state.size} onChange={this.handleSizeChange}>
//               <Radio.Button value='default'>Default</Radio.Button>
//               <Radio.Button value='middle'>Middle</Radio.Button>
//               <Radio.Button value='small'>Small</Radio.Button>
//             </Radio.Group>
//           </Form.Item>
//         </Form>
//       </>
//     );
//   }
// }

// export default ColSwitch;

// // <Table
// //   {...this.state}
// //   columns={this.state.column}
// //   dataSource={state.hasData ? data : null}
// //   pagination={{ position: [this.state.top, this.state.bottom] }}
// //   scroll={scroll}
// // />
