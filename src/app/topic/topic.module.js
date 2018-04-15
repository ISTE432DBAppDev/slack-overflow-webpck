import angular from 'angular';
import TopicComponent from './topic.component';
import TopicService from './topic.service';
import './topic.scss';

const TopicModule = angular
  .module('topic', [])
  .service('TopicService', TopicService)
  .component('topic', TopicComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('topic', {
        url: '/',
        component: 'topic'
      });
  })
  .name;

export default TopicModule;
