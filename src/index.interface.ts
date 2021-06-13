export interface IFromItem {
  area: string;
  address: string;
  standard_price_1: string;
  standard_price_2: string;
  min_price: string;
  max_price: string;
  description: string;
  target_destination: number;
}
export type PartiaIFormItem = Partial<IFromItem>;


export interface IToItem {
  area: string;
  address: string;
  standard_price_1: string;
  standard_price_2: string;
  min_price: string;
  max_price: string;
  description: string;
  target_destination: number;
}
export type PartiaIToItem = Partial<IToItem>;

export interface IConnectItem {
  area: string;
  address: string;
  start_address: string;
  target_address: string;
  standard_price_1: string;
  standard_price_2: string;
  min_price: string;
  description: string;
  target_destination: number;
}
export type PartiaIConnectItem = Partial<IConnectItem>;
