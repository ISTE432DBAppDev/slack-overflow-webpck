const LanguageService = {
  template: require('./language.template.html'),
  bindings: {
    /*
    {
      Sends back the selected language
      name: "Java"
    }
    */
    language: '=',
  },
  controllerAs: 'vm',
  controller: class LanguageComponent {
    constructor(LanguageService, $scope) {
      'ngInject';
      this.LanguageService = LanguageService;
      this.$scope = $scope;
    }

    $onInit() {
      this.LanguageService.hello();
      const vm = this;
    }
  }
};

export default LanguageService;
