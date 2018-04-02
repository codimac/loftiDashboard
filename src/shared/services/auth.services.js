import { storageSvc } from '@services/storage.services';
import jwt_decode from 'jwt-decode';

class AuthService {

  constructor() {
    this.token = storageSvc.getItem('token');
  }

  isAuth() {
    if (storageSvc.hasToken()) this.token = storageSvc.getItem('token');
    return storageSvc.hasToken() && !this._tokenExpired(this.token);
  }

  _tokenExpired(token) {
    return jwt_decode(token).exp < this._now();
  }

  _now() {
    return Math.floor(Date.now() / 1000);
  }

}

export const authSvc = new AuthService();
