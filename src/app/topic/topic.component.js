const TopicService = {
  template: require('./topic.template.html'),
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

      vm.submitTopic = function(topic){
        console.log("Submit topic");
        vm.data.topic = topic;
      };
    }
  }
};

export default TopicService;
