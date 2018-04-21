export default class LoginService {
  constructor($log) {
    'ngInject';

    this.$log = $log;
  }

  hello() {
    console.log('This is the login component!');
  }

  loginAccount(username, password){
    var result;
    if(username == "abc" && password == "123"){
      result = {
        data: {
          userID: 1
        }
      };
    } else{
      result = {
        data: {
          userID: null
        }
      };
    }
    return result;
  }

  createAccount(username, password){
    return {
      data: {
        userID: 1
      }
    }
  }
}
