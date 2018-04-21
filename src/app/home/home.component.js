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

        vm.user = {
          userID: ""
        }

        vm.tipsData = {
          language: "java",
          userID: "1"
        }
  
        /**
         * Watch for the user data to change. If it changes, check if the user is logged in. 
         */
        this.$scope.$watch('vm.user.userID', function () {
          console.log("watch vm.user.userID changed: " + vm.user.userID);
            if(vm.user.userID != "" && vm.user.userID != null){
              vm.tipsData.userID = vm.user.userID;
                vm.state = 'tips';
            }
        });
      }

    }
};

export default HomeComponent;