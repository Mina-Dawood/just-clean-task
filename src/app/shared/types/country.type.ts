import { ICountry } from "../interfaces";

export type CountryType =
  | 'KW'
  | 'UAE'
  | 'KSA'
  | 'BH'
  | 'QA'

  export type CountryListType = {
    [name in CountryType]: ICountry;
  };
