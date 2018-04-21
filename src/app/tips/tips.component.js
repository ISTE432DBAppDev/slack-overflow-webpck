const TipsComponent = {
  template: require('./tips.template.html'),
  bindings: {
    /*
    accepts the language and user to display tips
    {
      language: "java",
      userID: "1"
    }
    */
    data: '<',
  },
  controllerAs: 'vm',
  controller: class TipsComponent {
    constructor(TipsService, $scope) {
      'ngInject';
      this.TipsService = TipsService;
      this.$scope = $scope;
    }

    $onInit() {
      this.TipsService.hello();
      const vm = this;

      // this will be a service call
      vm.tipsList = this.TipsService.getTips(vm.data.language);

      vm.upVote = function(tipId){
        var success = this.TipsService.upVote(tipId, vm.data.userID);
        console.log("Vote Up!");
      }

      vm.downVote = function(tipId){
        var success = this.TipsService.downVote(tipId, vm.data.userID);
        console.log("Vote Down!");
      }

    }
  }
};

export default TipsComponent;
