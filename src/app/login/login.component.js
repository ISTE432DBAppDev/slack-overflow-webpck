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
          this.LoginService.createAccount(vm.username, vm.password).then(function(response){
            if(response.error != null){
              console.error(response.error);
            }else{
              vm.user.userID = response.userID;
              console.log("vm.user.userID: " + vm.user.userID);
            }
          });
        } else {
            var success = this.LoginService.loginAccount(vm.username, vm.password);
              if(response.userID != null){
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
