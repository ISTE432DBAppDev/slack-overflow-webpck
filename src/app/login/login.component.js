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

      vm.loginErrorMsg = "sample";
      vm.loginError = false;

      vm.login = function(){
        if(vm.createAccount == true){
          this.LoginService.createAccount(vm.username, vm.password).then(function(response){
            if(response.error != null){
              vm.loginError = true;
              vm.loginErrorMsg = response.error;
            }else{
              vm.user.userID = response.accountid;
              console.log("vm.user.userID: " + vm.user.userID);
            }
          });
        } else {
          this.LoginService.loginAccount(vm.username, vm.password).then(function(response){
            if(response.error != null || !(response.accountid > 0)){
              
              vm.loginError = true;
              vm.loginErrorMsg = "Your username or password are incorrect.";
            }else{
              vm.user.userID = response.accountid;
              console.log("vm.user.userID: " + vm.user.userID);
              console.log("Logging in: " + response.accountid);

            }
          });

        }
      }
    }
  }
};

export default LoginComponent;
