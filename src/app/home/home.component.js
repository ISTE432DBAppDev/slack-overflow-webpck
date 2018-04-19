const HomeComponent = {
    template: require('./home.template.html'),
    controllerAs: 'vm',
    controller: class HomeComponent {
      constructor(HomeService) {
        'ngInject';
        this.HomeService = HomeService;
  
      }
  
      $onInit() {
        this.HomeService.hello();
        const vm = this;
        vm.state = 'login';
      }
    }
};

export default HomeComponent;