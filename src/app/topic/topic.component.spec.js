import angular from 'angular';
import 'angular-mocks';
import AppModule from '../app';

describe('topic component controller', () => {
  let $controller; 
  it('Shoud Pass a dummy test', () => {
    expect(true).toBeTruthy();
  });
  it('Shoud display 3 buttons', () => {
    var button = element.find('button.button');
    expect(button.length).toBe(3);
  });

});
