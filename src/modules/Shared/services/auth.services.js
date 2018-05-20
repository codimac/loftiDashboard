import { storageSvc } from '@services/storage.services';
import jwt_decode from 'jwt-decode';

class AuthService {

  isAuth() {
    return storageSvc.hasToken() && !this._tokenExpired(storageSvc.getItem('token'));
  }

  _tokenExpired(token) {
    return jwt_decode(token).exp < this._now();
  }

  _now() {
    return Math.floor(Date.now() / 1000);
  }

}

export const authSvc = new AuthService();
