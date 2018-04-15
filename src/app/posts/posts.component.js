const PostsComponent = {
  template: require('./posts.template.html'),
  controller: class PostsComponent {
    constructor(PostsService) {
      'ngInject';
      this.PostsService = PostsService;
    }

    $onInit() {
      this.PostsService.hello();
    }
  }
};

export default PostsComponent;
