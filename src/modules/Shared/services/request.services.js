import axios from 'axios';
import Http from '@Shared/Http';
import { storageSvc } from '@services/storage.services';

class RequestService {

  generateOptions = () => {
    return {headers: {
      Authorization: `Bearer ${storageSvc.getItem('token')}`,
    }};
  };

}

export const requestSvc = new RequestService();
