const NOTIFICATIONS_STORE_KEY = `notifications`;

function getNotifications(state) {
  return state[NOTIFICATIONS_STORE_KEY] || {};
}

export {
  NOTIFICATIONS_STORE_KEY,
  getNotifications,
};
