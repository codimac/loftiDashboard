import axios from 'axios';
import Http from '@shared/Http';

class RequestService {

  addBearerHeaders(token) {
    Http.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

}

export const requestSvc = new RequestService();
