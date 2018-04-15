export default class TipsService {
  constructor($log) {
    'ngInject';

    this.$log = $log;
  }

  hello() {
    console.log('This is the tips component!');
  }
}
