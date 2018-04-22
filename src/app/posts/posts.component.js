const PostsComponent = {
  template: require('./posts.template.html'),
  bindings: {
    /*
    accepts the language and topic display posts
    {
      language: "java",
      topic: "variables"
    }
    */
    data: '<',
  },
  controllerAs: 'vm',
  controller: class PostsComponent {
    constructor(PostsService, $scope, $sce) {
      'ngInject';
      this.PostsService = PostsService;
      this.$scope = $scope;
      this.$sce = $sce;
    }

    $onInit() {
      this.PostsService.hello();
      const vm = this;

      vm.postsList = [
        { title: "",
          answer: ""},
        { title: "",
        answer: ""},
        { title: "",
        answer: ""},
        { title: "",
        answer: ""},
        { title: "",
        answer: ""}
      ];

      this.PostsService.getPosts(vm.data.language, vm.data.topic).then(function(data){
        console.log("this.PostsService.getPosts");
        console.log(data);
        var i;
        for(i=0; i<data.items.length; i++){
          vm.postsList[i].title = vm.$sce.trustAsHtml(data.items[i].title);
          vm.getAnswer(data.items[i].accepted_answer_id, i);
        }
      });

      vm.getAnswer = function(id, i){
        console.log("inside vm.getAnswer");
        this.PostsService.getAnswer(id).then(function(data){
          console.log("this.PostsService.getAnswer(id)");
          console.log(data);
          vm.postsList[i].answer = vm.$sce.trustAsHtml(data.items[0].body);
        });
      };
    }
  }
};

export default PostsComponent;
