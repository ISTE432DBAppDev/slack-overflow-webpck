const LoginComponent = {
  bindings: {
    /*
    Sends back loggined in user if successfuly logged in
    {
      name: "John56"
    }
    */
    user: '=',
  },
  controllerAs: 'vm',
  template: require('./login.template.html'),
  controller: class LoginComponent {
    constructor(LoginService, $scope) {
      'ngInject';
      this.LoginService = LoginService;
      this.$scope = $scope;
    }

    $onInit() {
      this.LoginService.hello();

      const vm = this;

      vm.initUserName = vm.user.name;

      vm.goToTips = function(){
        vm.user = {
          name: vm.initUserName
        }
      }
    }
  }
};

export default LoginComponent;
