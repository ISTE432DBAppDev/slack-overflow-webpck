import angular from 'angular';
import 'angular-mocks';
import AppModule from '../app';
import TipsService from './TipsService';
import { val } from '@uirouter/angularjs';

describe('posts component controller', () => {
  let $controller; 
  it('Shoud Pass a dummy test', () => {
    expect(true).toBeTruthy();
  });
  it('Shoud load 5 posts', () => {
    expect(vm.postsList.length).toBe(5);
  });
});