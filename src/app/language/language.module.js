import angular from 'angular';
import LanguageComponent from './language.component';
import LanguageService from './language.service';
import './language.scss';

const LanguageModule = angular
  .module('language', [])
  .service('LanguageService', LanguageService)
  .component('language', LanguageComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('language', {
        url: '/',
        component: 'language'
      });
  })
  .name;

export default LanguageModule;
