class StorageService {

  constructor() {
    this.prefix = 'ib';
  }

  getItem(key) {
    return localStorage.getItem(`${this.prefix}_${key}`);
  }

  setItem(key, value) {
    localStorage.setItem(`${this.prefix}_${key}`, value);
  }

  removeItem(key) {
    localStorage.removeItem(`${this.prefix}_${key}`);
  }

  has(key) {
    return this.getItem(key) !== null;
  }

  hasToken() {
    return this.has('token') && this.getItem('token').split('.').length === 3;
  }

}

export const storageSvc = new StorageService();
