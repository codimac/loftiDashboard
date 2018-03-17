import axios from 'axios';
import { environment } from '@shared/environment';

const isDev = process.env.NODE_ENV === 'development';

const Http = axios.create({
  baseURL: isDev ? environment.api.dev : environment.api.prod
});

export default Http;
