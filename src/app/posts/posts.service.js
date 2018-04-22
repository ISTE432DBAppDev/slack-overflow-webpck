export default class PostsService {
  constructor($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;

  }

  hello() {
    console.log('This is the posts component!');
  }
  getPosts(language, topic){
    var url = "https://api.stackexchange.com";
    var query = "";
    var filterBody = "&filter=withbody"

    var factor = "" + language + "-" + topic;

    switch (factor){
      case "java-functions":
        query = "/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&accepted=True&tagged=java&title=method&site=stackoverflow";
        break;
      case "java-variables":
        query = "/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&accepted=True&tagged=java&title=variables&site=stackoverflow";
        break;
      case "javascript-functions":
        query = "/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&accepted=True&tagged=javascript&title=function&site=stackoverflow";
        break;
      case "javascript-variables":
        query = "/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&accepted=True&tagged=javascript&title=variables&site=stackoverflow";
        break;
      case "php-functions":
        query = "/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&accepted=True&tagged=php&title=function&site=stackoverflow";
        break;
      case "php-variables":
        query = "/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&accepted=True&tagged=php&title=variables&site=stackoverflow";
        break;
    }

    return this.$http.get(url + query + filterBody).then(function(response){ 
      return response.data; 
    });
  }

  getAnswer(id){

    var url = "https://api.stackexchange.com";
    var query = "/2.2/answers/"+id+"?order=desc&sort=activity&site=stackoverflow";
    var filterBody = "&filter=withbody"

    return this.$http.get(url + query + filterBody).then(function(response){ 
      return response.data; 
    });
  }
}
