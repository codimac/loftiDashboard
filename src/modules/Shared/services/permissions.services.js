import { storageSvc } from '@services/storage.services';
import jwt_decode from 'jwt-decode';

class PermissionsService {

  isAdmin() {
    return storageSvc.hasToken() && this._getRole(storageSvc.getItem('token')) === 'ADMIN';
  }

  isStudent() {
    return storageSvc.hasToken() && this._getRole(storageSvc.getItem('token')) === 'STUDENT';
  }

  is(roles) {
    return storageSvc.hasToken() && roles.map(el => el.toUpperCase()).includes(this._getRole(storageSvc.getItem('token')).toUpperCase());
  }

  _getRole(token) {
    return jwt_decode(token).role_label;
  }

}

export const permissionsSvc = new PermissionsService();
