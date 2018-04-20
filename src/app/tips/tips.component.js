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
      vm.tipsList = {
        data: [
          {
            id: 0,
            language: "Java",
            rating: 4,
            description: "Akjsfd sdlkd sdkjdf awigj ekjee."
          },{
            id: 1,
            language: "c#",
            rating: 6,
            description: "Akjsfd sdlkd sdkjdf awigj ekjee."
          },{
            id: 2,
            language: "JavaScript",
            rating: -5,
            description: "Akjsfd sdlkd sdkjdf awigj ekjee."
          }
        ]
      };
      
    }
  }
};

export default TipsComponent;
