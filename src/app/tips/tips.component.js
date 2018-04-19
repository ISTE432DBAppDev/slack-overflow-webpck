const TipsComponent = {
  template: require('./tips.template.html'),
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
