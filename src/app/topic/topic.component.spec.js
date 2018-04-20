import angular from 'angular';
import 'angular-mocks';
import AppModule from '../app';

describe('topic component controller', () => {
  let $controller;

  beforeEach(() => {
    angular.mock.module(AppModule);

    angular.mock.inject((_$componentController_) => {
      $controller = _$componentController_('topic');
    });
  });

  it('should pass this dumby test', () => {
    expect(true).toBeTruthy();
  });
});
