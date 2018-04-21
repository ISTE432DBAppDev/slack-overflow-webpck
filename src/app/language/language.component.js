const LanguageService = {
  template: require('./language.template.html'),
  bindings: {
    /*
    {
      Sends back the selected language
      language: "java"
    }
    */
    data: '=',
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

      vm.submitLang = function(lang){
        console.log("Submit Langugage");
        vm.data.language = lang;
      };
    }
  }
};

export default LanguageService;
