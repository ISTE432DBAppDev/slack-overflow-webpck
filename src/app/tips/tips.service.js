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
    /*
    return this.$http.get("url to php service").then(function(response){
      return response.data;
    });
    */
    var baseUrl = "http://localhost:8888/ServiceLayer/ServiceCalls.php?fileName=TipService.class.php&function=getAllTipsForLanguage&language="
    var result;
    switch(language){
      case "java":
        var langId="1";
      break;
    }
    return this.$http.get(baseUrl+langId).then(function(response){
      return response.data;
    });
  }


  createTip(accountID, language, description){
    return { data:
      {
        success: "true"
      }
    };
  }

  // retrieves tips created by the currently logged in user
  upVote(tipID, accountID){
    var voteUrl = "http://localhost:8888/ServiceLayer/ServiceCalls.php?fileName=TipService.class.php&function=upvoteTip&tipsID=";
    return this.$http.get(voteUrl+tipID).then(function(response){
      return response.data;
    });
  }

  downVote(tipID, accountID){
    var voteUrl = "http://localhost:8888/ServiceLayer/ServiceCalls.php?fileName=TipService.class.php&function=downvoteTip&tipsID=";
    return this.$http.get(voteUrl+tipID).then(function(response){
      return response.data;
    });
  }
}
