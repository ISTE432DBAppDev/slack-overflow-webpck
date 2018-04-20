import angular from 'angular';
import 'angular-mocks';
import AppModule from '../app';

describe('tips component controller', () => {
  let $controller;
  let $service;
  var allTopicTips = [
  {
    accountid: '1',
    language: 'java',
    description: 'Java Object Oriented Programming',
    rating: 5
  },
  {
    accountid: '5',
    language: 'java',
    description: 'Java Inheritance',
    rating: 3
  }

];

  beforeEach(() => {

    // angular.mock allows us to specify the module
    angular.mock.module(AppModule);
    // Inject AppModule Into Test
    angular.mock.inject((_$componentController_) => {
      $controller = _$componentController_('tips');
    });

  });

  it('should pass this du', () => {
    expect(true).toBeTruthy();
  });


});
