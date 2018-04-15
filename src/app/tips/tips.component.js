const TipsComponent = {
  template: require('./tips.html'),
  controller: class TipsComponent {
    constructor(TipsService) {
      'ngInject';
      this.TipsService = TipsService;
    }

    $onInit() {
      this.TipsService.hello();
    }
  }
};

export default TipsComponent;
