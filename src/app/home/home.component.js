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
          name: "John",
          password: "123",
          loggedIn: false
        }
  
        /**
         * true if the user has permission to edit all events OR if they have permission to edit their own event and this is an event they created
         */
        this.$scope.$watch('vm.user', function () {
            if(vm.user.loggedIn == true){
                vm.state = 'topic';
            }
        });
      }

    }
};

export default HomeComponent;