const LoginComponent = {
  bindings: {
    /*
    {
      name: "John",
      password: "123",
      loggedIn: false
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
          name: "John",
          password: "123",
          loggedIn: true
        }
      }
    }
  }
};

export default LoginComponent;
