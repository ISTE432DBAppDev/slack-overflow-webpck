const TopicService = {
  template: require('./topic.html'),
  controller: class TopicComponent {
    constructor(TopicService) {
      'ngInject';
      this.TopicService = TopicService;
    }

    $onInit() {
      this.TopicService.hello();
    }
  }
};

export default TopicService;
