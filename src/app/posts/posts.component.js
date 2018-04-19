const PostsComponent = {
  template: require('./posts.template.html'),
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
