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
    constructor(PostsService, $scope) {
      'ngInject';
      this.PostsService = PostsService;
      this.$scope = $scope;
    }

    $onInit() {
      this.PostsService.hello();
      const vm = this;

      // url example
      var url = "https://api.stackexchange.com";
      var query = "/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&accepted=True&tagged=java&title=method&site=stackoverflow"
    }
  }
};

export default PostsComponent;
