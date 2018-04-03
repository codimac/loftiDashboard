import { storageSvc } from '@services/storage.services';
import jwt_decode from 'jwt-decode';

class PermissionsService {

  isAdmin() {
    return storageSvc.hasToken() && this._getRole(storageSvc.getItem('token')) === 'ADMIN';
  }

  isStudent() {
    return storageSvc.hasToken() && this._getRole(storageSvc.getItem('token')) === 'STUDENT';
  }

  is(role) {
    return storageSvc.hasToken() && this._getRole(storageSvc.getItem('token')) === role.toUpperCase();
  }

  _getRole(token) {
    return jwt_decode(token).role_label;
  }

}

export const permissionsSvc = new PermissionsService();
