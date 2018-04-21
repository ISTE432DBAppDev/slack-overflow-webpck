const LoginComponent = {
  bindings: {
    /*
    Sends back loggined in user if successfuly logged in
    {
      userID: "1"
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

      vm.login = function(){
        if(vm.createAccount == true){
          var data = this.LoginService.createAccount(vm.username, vm.password);
          if(data.data.userID != null){
            vm.user.userID = data.data.userID;
            console.log("vm.user.userID: " + vm.user.userID);
          }
          console.log("Creating account");
        } else {
          var data = this.LoginService.loginAccount(vm.username, vm.password);
          if(data.data.userID != null){
            vm.user.userID = data.data.userID;
            console.log("vm.user.userID: " + vm.user.userID);
          }
          console.log("Logging in: " + data.data.userID);
        }
      }
    }
  }
};

export default LoginComponent;
