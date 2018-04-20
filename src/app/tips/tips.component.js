const TipsComponent = {
  template: require('./tips.template.html'),
  bindings: {
    /*
    accepts the language and user to display tips
    {
      language: "java",
      user: "John56"
    }
    */
    data: '<',
  },
  controllerAs: 'vm',
  controller: class TipsComponent {
    constructor(TipsService, $scope) {
      'ngInject';
      this.TipsService = TipsService;
      this.$scope = $scope;
    }

    $onInit() {
      this.TipsService.hello();
      const vm = this;
    }
  }
};

export default TipsComponent;
