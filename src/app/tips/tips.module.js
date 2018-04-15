import angular from 'angular';
import TipsComponent from './tips.component';
import TipsService from './tips.service';
import './tips.scss';

const TipsModule = angular
  .module('tips', [])
  .service('TipsService', TipsService)
  .component('tips', TipsComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('tips', {
        url: '/',
        component: 'tips'
      });
  })
  .name;

export default TipsModule;
