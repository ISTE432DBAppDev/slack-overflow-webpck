export default class LoginService {
  constructor($log, $http) {
    'ngInject';
    this.$log = $log;
    this.$http = $http;
  }

  hello() {
    console.log('This is the login component!');
  }

  loginAccount(username, password){
    var result;
    var loginUrl = "http://localhost:8888/ServiceLayer/ServiceCalls.php?fileName=AccountService.class.php&function=loginAccount";
    var loginParams="&userName="+username+"&pwd="+password;
    return this.$http.get(loginUrl+loginParams).then(function(response){
      return response.data;
    });
  }

  createAccount(username, password){
    var createUrl = "http://localhost:8888/ServiceLayer/ServiceCalls.php?fileName=AccountService.class.php&function=createAccount";
    var loginParams="&userName="+username+"&pwd="+password;
    return this.$http.get(createUrl+loginParams).then(function(response){
      return response.data;
    });
  }
}
