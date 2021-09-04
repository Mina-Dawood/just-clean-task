import { Currency } from "../enums";
import { CountryListType } from "../types";

export const COUNTRY_LIST: CountryListType = {
    KW: {
        id: 1,
        name: 'KW',
        currency: Currency.KW,
        decimal: 3
    },
    KSA: {
        id: 2,
        name: 'KSA',
        currency: Currency.KSA,
        decimal: 2
    },
    UAE: {
        id: 3,
        name: 'UAE',
        currency: Currency.UAE,
        decimal: 2
    },
    BH: {
        id: 4,
        name: 'BH',
        currency: Currency.BH,
        decimal: 3
    },
    QA: {
        id: 5,
        name: 'QA',
        currency: Currency.QA,
        decimal: 2
    }
};
