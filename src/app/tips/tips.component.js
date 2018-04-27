const TipsComponent = {
  template: require('./tips.template.html'),
  controllerAs: 'vm',
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
  controller: class TipsComponent {
    constructor(TipsService, $scope, $sce) {
      'ngInject';
      this.TipsService = TipsService;
      this.$scope = $scope;
      this.$sce = $sce;
    }

    $onInit() {
      this.TipsService.hello();
      const vm = this;

      this.TipsService.getTips(vm.data.language).then(function(data){
        console.log("this.TipsService.getTips");
        vm.tipslist = data;

        for(var i=0;i < data.length; i++){
          vm.tipslist[i].description = vm.$sce.trustAsHtml(data[i].description);
          vm.tipslist[i].rating = vm.$sce.trustAsHtml(data[i].rating.toString());
        }

      })
      console.log("vm.data.language: " + vm.data.language);

      vm.upVote = function(tipId){
        var success = this.TipsService.upVote(tipId, vm.data.userID);
        console.log("Vote Up!");
      }

      vm.downVote = function(tipId){
        var success = this.TipsService.downVote(tipId, vm.data.userID);
        console.log("Vote Down!");
      }

      vm.addTip = function(){
        var success = this.TipsService.createTip(vm.data.userID, vm.data.language, vm.tipDesc);
        vm.tipDesc = "";
        console.log("Tip created!");
      }

    }
  }
};

export default TipsComponent;
