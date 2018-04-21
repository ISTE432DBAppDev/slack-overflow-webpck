const TopicService = {
  template: require('./topic.html'),
  bindings: {
    /*
    accepts the language and sends back the topic
    {
      language: "java",
      topic: "variables"
    }
    */
    data: '=',
  },
  controllerAs: 'vm',
  controller: class TopicComponent {
    constructor(TopicService, $scope) {
      'ngInject';
      this.TopicService = TopicService;
      this.$scope = $scope;
    }

    $onInit() {
      this.TopicService.hello();
      const vm = this;
    }
  }
};

export default TopicService;
