import { environment } from '@env/environment';

const baseURL: string = environment.baseURL;

export const API_CONFIG = {
    GET_ITEMS: `${baseURL}/items?country_id={0}`
}