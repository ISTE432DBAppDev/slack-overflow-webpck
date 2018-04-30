const HomeComponent = {
    template: require('./home.template.html'),
    controllerAs: 'vm',
    controller: class HomeComponent {
      constructor(HomeService, $scope) {
        'ngInject';
        this.HomeService = HomeService;
        this.$scope = $scope;
      }
  
      $onInit() {
        this.HomeService.hello();
        const vm = this;
        vm.state = 'login';

        vm.loginData = {
          userID: ""
        };
        vm.langData = {
          language: "",
        };
        vm.topicData = {
          language: "",
          topic: "",
          back: false
        };
        vm.postsData = {
          language: "",
          topic: "",
          back: false
        }
        vm.tipsData = {
          language: "",
          userID: "",
          back: false
        };
        
        
  
        /**
         * Watch for the user data to change. If it changes, check if the user is logged in
         * and then change to the language module. 
         */
        this.$scope.$watch('vm.loginData.userID', function () {
            if(vm.loginData.userID != "" && vm.loginData.userID != null){
              vm.tipsData.userID = vm.loginData.userID;
              vm.state = 'language';
            }
        });
        
        /**
         * Watch for the language choice to change. If it changes, set the chosen language 
         * and change to the topic module. 
         */
        this.$scope.$watch('vm.langData.language', function () {
            if(vm.langData.language == "java" || vm.langData.language == "javascript" || vm.langData.language == "php"){
              vm.topicData.language = vm.langData.language;
              vm.tipsData.language = vm.langData.language;
              vm.postsData.language = vm.langData.language;
              vm.state = 'topic';
            }
        });

        /**
         * Watch for the topic choice to change. If it changes, set the topic and change 
         * to the posts module or tips module. 
         */
        this.$scope.$watch('vm.topicData.topic', function () {
          if(vm.topicData.topic == "functions" || vm.topicData.topic == "variables"){
            vm.postsData.topic = vm.topicData.topic;
            vm.state = 'posts';
          } else if(vm.topicData.topic == "tips"){
            vm.state = 'tips';
          }
        });

        /**
         * user clicked the back button
         */
        this.$scope.$watch('vm.topicData.back', function () {
          if(vm.topicData.back == true){
            vm.topicData.back = false;
            vm.langData.language = "";
            vm.topicData.language = "";
            vm.tipsData.language = "";
            vm.postsData.language = "";
            vm.state = 'language';
          }
        });

        /**
         * user clicked the back button
         */
        this.$scope.$watch('vm.postsData.back', function () {
          if(vm.postsData.back == true){
            vm.postsData.back = false;
            vm.topicData.topic = "";
            vm.state = 'topic';
          }
        });

        /**
         * user clicked the back button
         */
        this.$scope.$watch('vm.tipsData.back', function () {
          if(vm.tipsData.back == true){
            vm.tipsData.back = false;
            vm.topicData.topic = "";
            vm.state = 'topic';
          }
        });
      }
    }
};

export default HomeComponent;