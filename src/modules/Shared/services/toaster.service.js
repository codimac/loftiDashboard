import { toast } from 'react-toastify';

class ToasterService {

  notify(message) {
    toast(message, {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  error(message) {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  success(message) {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT
    });

  }

}

export const toasterSvc = new ToasterService();
