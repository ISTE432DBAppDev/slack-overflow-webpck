import angular from 'angular';
import PostsComponent from './posts.component';
import PostsService from './posts.service';
import './posts.scss';

const PostsModule = angular
  .module('posts', [])
  .service('PostsService', PostsService)
  .component('posts', PostsComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('posts', {
        url: '/',
        component: 'posts'
      });
  })
  .name;

export default PostsModule;
