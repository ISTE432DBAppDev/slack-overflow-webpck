import angular from 'angular';
import 'angular-mocks';
import AppModule from '../app';
import MockTipsService from './MockTipsService';

describe('tips component controller', () => {
  let $controller;
  let $service;

  var specificTopicTips = [
  {
    accountid: '1',
    language: 'java',
    description: 'Java Object Oriented Programming',
    rating: 1
  },
  {
    accountid: '5',
    language: 'java',
    description: 'Java Inheritance',
    rating: 3
  }

];

  beforeEach(() =>

    // angular.mock allows us to specify the module
    angular.mock.module(AppModule);
    // Inject AppModule Into Test
    angular.mock.inject((_$componentController_) => {
      $controller = _$componentController_('tips');
    });
  });
  beforeEach(MockTipsService);

  it('Shoud Pass a dummy test', () => {
    expect(true).toBeTruthy();
  });


});
