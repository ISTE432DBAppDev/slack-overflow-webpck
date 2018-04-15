export default class TopicService {
  constructor($log) {
    'ngInject';

    this.$log = $log;
  }

  hello() {
    console.log('This is the topic component!');
  }
}
