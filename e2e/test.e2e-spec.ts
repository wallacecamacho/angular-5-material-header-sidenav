import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');

      expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(2);

       let allOptions = element.all(by.options('value for (key, value) in operators'));
       expect(allOptions.count()).toEqual(5);
       let firstOption = allOptions.get(0);
       firstOption.click();
       expect(firstOption.getText()).toEqual('+');

      element(by.id('gobutton')).click();

      expect(element(by.binding('latest')).getText()).toEqual('3'); // This is wrong!
    });

});

