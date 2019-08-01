import { NotificationManager } from "react-notifications";

export default {
  error: message => {
    return NotificationManager.error(message || "");
  },
  success: message => {
    return NotificationManager.success(message || "");
  },
  warning: message => {
    return NotificationManager.warning(message || "");
  },
  info: message => {
    return NotificationManager.info(message || "");
  }
};