import angular from 'angular';
import 'angular-mocks';
import AppModule from '../app';
import LoginService from './LoginService';
import { val } from '@uirouter/angularjs';

describe('login component controller', () => {
  let $controller; 
  it('Shoud Pass a dummy test', () => {
    expect(true).toBeTruthy();
  });
  it('Shoud execute login on button click', () => {
    spyOn(component, login);
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.login).toHaveBeenCalled();
    })
  });
  it('Shoud execute createAccount on button click', () => {
    spyOn(component, createAccount);
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    let box = fixture.debugElement.nativeElement.querySelector('input["checkbox"]');
    box.click();

    fixture.whenStable().then(() => {
      expect(component.createAccount).toHaveBeenCalled();
    })
  });

  
});