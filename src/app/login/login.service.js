export default class LoginService {
  constructor($log) {
    'ngInject';

    this.$log = $log;
  }

  hello() {
    console.log('This is the login component!');
  }
}
