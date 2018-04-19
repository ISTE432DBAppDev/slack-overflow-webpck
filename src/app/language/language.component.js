const LanguageComponent = {
  template: require('./language.template.html'),
  controllerAs: 'vm',
  controller: class LanguageComponent {
    constructor(languageService, $scope) {
      'ngInject';
      this.LanuageService = LanuageService;
      this.$scope = $scope;
    }

    $onInit() {
      this.LanuageService.hello();
      const vm = this;
    }
  }
};

export default LanguageComponent;