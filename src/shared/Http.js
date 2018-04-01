import axios from 'axios';
import { environment as dev } from '@env/environment';
import { environment as prod } from '@env/environment.prod';
import { storageSvc } from '@services/storage.services';

const environment = process.env.NODE_ENV === 'development' ? dev : prod;

const Http = axios.create({
  baseURL: environment.api,
  headers: {
    Authorization: `Bearer ${storageSvc.getItem('token')}`
  }
});

export default Http;
