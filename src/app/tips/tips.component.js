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

      // this will be a service call
      /*
      {
        data: [
          {
            tipsID: 0,
            accountID: 4,
            language: "java",
            rating: 4,
            description: "Akjsfd sdlkd sdkjdf awigj ekjee."
          },{
            tipsID: 1,
            accountID: 4,
            language: "java",
            rating: 6,
            description: "Akjsfd sdlkd sdkjdf awigj ekjee."
          },{
            tipsID: 2,
            accountID: 5,
            language: "java",
            rating: -5,
            description: "Akjsfd sdlkd sdkjdf awigj ekjee."
          }
        ]
      }
      */
      vm.tipsList = TipsService.getTips("java");
    }
  }
};

export default TipsComponent;
