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
        this.TipsService.upVote(tipId, vm.data.userID).then(function(response){
          if(response == "true"){
            // Grab the tip object that was clicked
            for(var i=0;i<vm.tipslist.length;i++){
              if(vm.tipslist[i].tipsid == tipId){
                // get numerical value of current rating
                var currentRating = parseInt(vm.tipslist[i].rating.toString());
                // Add 1 to the vote
                var newRating = currentRating + 1;
                // update vm.rating
                vm.tipslist[i].rating = vm.$sce.trustAsHtml(newRating.toString())
              }
            }
          }

        });
        console.log("Vote Up!");
      }

      vm.downVote = function(tipId){
        this.TipsService.downVote(tipId, vm.data.userID).then(function(response){
          if(response == "true"){
            // Grab the tip object that was clicked
            for(var i=0;i<vm.tipslist.length;i++){
              if(vm.tipslist[i].tipsid == tipId){
                // get numerical value of current rating
                var currentRating = parseInt(vm.tipslist[i].rating.toString());
                // Add 1 to the vote
                var newRating = currentRating - 1;
                // update vm.rating
                vm.tipslist[i].rating = vm.$sce.trustAsHtml(newRating.toString())
              }
            }
          }

        });
        console.log("Vote Down!");
      }

      vm.addTip = function(){
        var success = this.TipsService.createTip(vm.data.userID, vm.data.language, vm.tipDesc);
        vm.tipDesc = "";
        console.log("Tip created!");
      }

      vm.back = function(){
        vm.data.back = true;
      }

    }
  }
};

export default TipsComponent;
