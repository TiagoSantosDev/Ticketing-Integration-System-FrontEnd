import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* pastebin.spec.ts */
 
//import the Pastebin class
import { Pastebin } from './demo.component';
 
describe('Pastebin', () => {
    it('should create an instance of Pastebin',() => {
        expect(new Pastebin()).toBeTruthy();
    });
    it('should accept values', () => {
      let pastebin = new Pastebin();
      pastebin = {
          id: 111,
          title: "Hello world",
          language: "Ruby",
          paste: 'print "Hello"',
      }
      expect(pastebin.id).toEqual(111);
      expect(pastebin.language).toEqual("Ruby");
      expect(pastebin.paste).toEqual('print "Hello"');
  });
})