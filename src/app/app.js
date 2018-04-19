import angular from 'angular';
import '@uirouter/angularjs';

import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeModule from '../app/home/home.module';
//import LanguageModule from '../app/language/language.module';
import LoginModule from '../app/login/login.module';
import PostsModule from '../app/posts/posts.module';
import TipsModule from '../app/tips/tips.module';
import TopicModule from '../app/topic/topic.module';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {

  }
}

const APP_MODULE = 'app';

angular.module(APP_MODULE, [
  'ui.router',
  HomeModule,
  LoginModule,
  PostsModule,
  TipsModule,
  TopicModule
  //LanguageModule
])
.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  'ngInject';
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
})
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default APP_MODULE;
