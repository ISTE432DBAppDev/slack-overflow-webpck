const LanguageComponent = {
  template: require('./language.template.html'),
  controllerAs: 'vm',
  controller: class LanguageComponent {
    constructor(languageService) {
      'ngInject';
      this.LanuageService = LanuageService;

    }

    $onInit() {
      this.LanuageService.hello();
    }
  }
};

export default LanguageComponent;