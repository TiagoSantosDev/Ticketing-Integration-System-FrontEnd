/* Path: e2e/test.spec.ts */

import { browser, by, element } from 'protractor';

describe('Protractor Test1', () => {
 
  beforeEach(() => {
    browser.get('/');
  });

  it('should display the name of the application',() => {

  });
  
  it('Text areas should appear by default ',() => {
   
    expect(element(by.id('connectionName')).isPresent()).toBeTruthy('The text area should appear now');
    expect(element(by.id('cli')).isPresent()).toBeTruthy('The text area should appear now');
    expect(element(by.id('end')).isPresent()).toBeTruthy('The text area should appear now');
   
  });

   it('should accept and save input values', () => {

      element(by.name('connection.name')).sendKeys("puts 'Connection1';");

      element(by.name('client.name')).sendKeys("puts 'Client1';");

      element(by.name('endpoint.address')).sendKeys("puts 'Address1';");

      element(by.buttonText('Save')).click();

//      const lastRow = element.all(by.tagName('tr')).last();
//      expect(lastRow.getText()).toContain("Hello world in Ruby");
});

});