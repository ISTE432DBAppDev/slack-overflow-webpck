export default class TipsService {
  constructor($log, $http) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
  }


  hello() {
    console.log('This is the tips component!');
  }

  // Retrieves All the Tips for a particular topic from our PHP backend
  getTips(language){
    this.$http.get("./mockData.json").then(function(response){
      return response;
    });
  }

  // retrieves tips created by the currently logged in user
  getUserTips(login){

  }



}
