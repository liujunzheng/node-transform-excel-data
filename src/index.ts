import xlsx from 'node-xlsx';

import {
  PartiaIConnectItem,
  PartiaIFormItem,
  PartiaIToItem,
} from './index.interface';

// import * as path from 'path';

// console.log('xlsx ,', xlsx);
// console.log('path ,', __dirname);


const xlsxData = xlsx.parse(`${__dirname}/data.xlsx`);
// console.log('xlsx data , ', xlsxData, JSON.stringify(xlsxData));


const fromList: PartiaIFormItem[] = [];
const toList: PartiaIToItem[] = [];
const connectList = [];

xlsxData.forEach((sheetItem, index) => {
  console.log(`第 ${index + 1} 个 sheet：${sheetItem.name}`);
  if (index === 0) {
    // console.log(`sheet data ，`, sheetItem.data);
    for (let j = 4; j < sheetItem.data.length; j++) {
      const dataItem = (sheetItem.data[j]) as any;
      // console.log('dataItem ,', dataItem);
      const fromItem: PartiaIFormItem = {};
      fromItem.area = dataItem[0];
      fromItem.standard_price_1 = dataItem[4];
      fromItem.standard_price_2 = dataItem[5];
      fromItem.min_price = dataItem[6];
      fromItem.max_price = dataItem[7];
      fromItem.description = dataItem[8];
      const shengStr = dataItem[1][dataItem[1].length - 1] === '省' ? dataItem[1] : `${dataItem[1]}省`;
      const shiStr = dataItem[2][dataItem[2].length - 1] === '市' ? dataItem[2] : `${dataItem[2]}市`;
      const quLastStr = dataItem[3][dataItem[3].length - 1];
      const quStr = quLastStr === '市' || quLastStr === '区' || quLastStr === '县' ? dataItem[3] : `${dataItem[3]}区`;
      const address = `${shengStr} ${shiStr} ${quStr}`;
      // console.log('address ,', address);
      fromItem.address = address;
      fromItem.target_destination = 0;
      fromList.push(fromItem);
    }
  }
  if (index === 1) {
    // console.log(`sheet data ，`, sheetItem.data);
    for (let j = 4; j < sheetItem.data.length; j++) {
      const dataItem = (sheetItem.data[j]) as any;
      // console.log('dataItem ,', dataItem);
      const toItem: PartiaIToItem = {};
      toItem.area = dataItem[0];
      toItem.standard_price_1 = dataItem[4];
      toItem.standard_price_2 = dataItem[5];
      toItem.min_price = dataItem[6];
      toItem.max_price = dataItem[7];
      toItem.description = dataItem[8];
      const shengStr = dataItem[1][dataItem[1].length - 1] === '省' ? dataItem[1] : `${dataItem[1]}省`;
      const shiStr = dataItem[2][dataItem[2].length - 1] === '市' ? dataItem[2] : `${dataItem[2]}市`;
      const quLastStr = dataItem[3][dataItem[3].length - 1];
      const quStr = quLastStr === '市' || quLastStr === '区' || quLastStr === '县' ? dataItem[3] : `${dataItem[3]}区`;
      const address = `${shengStr} ${shiStr} ${quStr}`;
      // console.log('address ,', address);
      toItem.address = address;
      toItem.target_destination = 0;
      toList.push(toItem);
    }
  }
  if (index === 2) {
    // console.log(`sheet data ，`, sheetItem.data);
    for (let j = 4; j < sheetItem.data.length; j++) {
      const dataItem = (sheetItem.data[j]) as any;
      // console.log('dataItem ,', dataItem);
      const connectItem: PartiaIConnectItem = {};
      connectItem.area = dataItem[0];
      connectItem.standard_price_1 = dataItem[8];
      connectItem.standard_price_2 = dataItem[9];
      connectItem.min_price = dataItem[10];
      // toItem.max_price = dataItem[7];
      connectItem.description = dataItem[4];
      // const shengStr = dataItem[1][dataItem[1].length - 1] === '省' ? dataItem[1] : `${dataItem[1]}省`;
      // const shiStr = dataItem[2][dataItem[2].length - 1] === '市' ? dataItem[2] : `${dataItem[2]}市`;
      // const quLastStr = dataItem[3][dataItem[3].length - 1];
      // const quStr = quLastStr === '市' || quLastStr === '区' || quLastStr === '县' ? dataItem[3] : `${dataItem[3]}区`;
      // const address = `${shengStr} ${shiStr} ${quStr}`;
      // connectItem.address = address;
      const start_last_str = dataItem[1][dataItem[1].length - 1];
      const start_address = start_last_str === '市' || start_last_str === '区' || start_last_str === '县' ? dataItem[1] : `${dataItem[1]}区`;
      connectItem.start_address = start_address;
      const shengStr = dataItem[2][dataItem[2].length - 1] === '省' ? dataItem[2] : `${dataItem[2]}省`;
      const shiStr = dataItem[3][dataItem[3].length - 1] === '市' ? dataItem[3] : `${dataItem[3]}市`;
      const target_address = `${shengStr} ${shiStr}`;
      connectItem.target_address = target_address;
      connectItem.target_destination = 0;
      connectList.push(connectItem);
    }
  }
});

console.log('fromList , ', fromList[0], fromList[fromList.length - 1], fromList.length);
console.log('toList , ', toList[0], toList[toList.length - 1], toList.length);
console.log('connectList , ', connectList[0], connectList[connectList.length - 1], connectList.length);

