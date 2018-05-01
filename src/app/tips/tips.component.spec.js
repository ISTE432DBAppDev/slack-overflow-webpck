import angular from 'angular';
import 'angular-mocks';
import AppModule from '../app';
import MockTipsService from './MockTipsService';
import { val } from '@uirouter/angularjs';

describe('tips component controller', () => {
  let $controller; 
  it('Shoud Pass a dummy test', () => {
    expect(true).toBeTruthy();
  });
  it('Shoud load the tips', () => {
    expect(vm.tipslist.length).toBeGreaterThan(0);
  });
  it('Shoud execute addTip on button click', () => {
    spyOn(component, 'addTip');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.addTip).toHaveBeenCalled();
    })
  });
  it('Shoud execute downVote on button click', () => {
    spyOn(component, 'downVote');

    let button = fixture.debugElement.nativeElement.querySelector('.fa-thumbs-down');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.downVote).toHaveBeenCalled();
    })
  });
  it('Shoud execute upVote on button click', () => {
    spyOn(component, 'upVote');

    let button = fixture.debugElement.nativeElement.querySelector('.fa-thumbs-up');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.upVote).toHaveBeenCalled();
    })
  });

});
