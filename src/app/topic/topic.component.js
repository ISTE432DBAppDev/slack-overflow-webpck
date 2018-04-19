const TopicService = {
  template: require('./topic.html'),
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
