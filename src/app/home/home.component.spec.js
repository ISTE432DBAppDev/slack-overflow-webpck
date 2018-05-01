import angular from 'angular';
import 'angular-mocks';
import AppModule from '../app';
import HomeService from './HomeService';
import { val } from '@uirouter/angularjs';

describe('home component controller', () => {
  let $controller; 
  it('Shoud Pass a dummy test', () => {
    expect(true).toBeTruthy();
  });
  it('Expect the inital state to be login', () => {
    expect(vm.state).toBe("login");
  });
  it('Expect the state to be language after login', () => {
    vm.loginData.userID = 3;
    expect(vm.state).toBe("language");
  });
  it('Expect the state to be topic after language selected', () => {
    vm.langData.language = "java";
    expect(vm.state).toBe("topic");
  });
  it('Expect the state to be posts after topic selected', () => {
    vm.topicData.topic = "functions";
    expect(vm.state).toBe("posts");
  });
  it('Expect the state to be tips after tips selected', () => {
    vm.topicData.topic = "tips";
    expect(vm.state).toBe("tips");
  });
});