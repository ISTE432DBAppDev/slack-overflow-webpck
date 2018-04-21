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
    this.$http.get("./mockData.json").then(function(response){
      return response;
    });
    */
    var result;
    switch(language){
      case "java":   
        result = {
          data: [
            {
              tipsID: 0,
              accountID: 1,
              language: "java",
              rating: 4,
              description: "Remember that String is an object."
            },{
              tipsID: 1,
              accountID: 1,
              language: "java",
              rating: 6,
              description: "Int and char have Object types of Integer and Character."
            },{
              tipsID: 2,
              accountID: 2,
              language: "java",
              rating: -5,
              description: "Make all of your variables and methods static."
            }
          ]
        };
      break;
    case "javascript":   
      result = {
        data: [
          {
            tipsID: 4,
            accountID: 1,
            language: "javascript",
            rating: -15,
            description: "It's the same as Java."
          },{
            tipsID: 5,
            accountID: 1,
            language: "javascript",
            rating: 2,
            description: "Variables are created using 'var'."
          },{
            tipsID: 6,
            accountID: 2,
            language: "javascript",
            rating: 0,
            description: "For-loops are made the same way as Java."
          }
        ]
      };
      break;
    case "php":   
      result = {
        data: [
          {
            tipsID: 7,
            accountID: 1,
            language: "php",
            rating: -1,
            description: "Arrays are hard."
          },{
            tipsID: 8,
            accountID: 1,
            language: "php",
            rating: 3,
            description: "You open a php file with <?."
          },{
            tipsID: 9,
            accountID: 2,
            language: "php",
            rating: 75,
            description: "You concatinate using '.'."
          }
        ]
      };
      break;
    }
    return result;
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
    return { data: 
      {
        success: "true"
      }  
    };
  }

  downVote(tipID, accountID){
    return { data: 
      {
        success: "true"
      }  
    };
  }
}
