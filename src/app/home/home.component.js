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
          name: ""
        }
  
        /**
         * Watch for the user data to change. If it changes, check if the user is logged in. 
         */
        this.$scope.$watch('vm.user', function () {
            if(vm.user.name != ""){
                vm.state = 'topic';
            }
        });
      }

    }
};

export default HomeComponent;