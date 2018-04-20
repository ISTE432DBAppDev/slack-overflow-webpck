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
    }
  }
};

export default PostsComponent;
