export function initialize(container, application) {
  application.inject('route', 'userService', 'service:user');
}

export default {
  name: 'user-service',
  initialize: initialize
};
