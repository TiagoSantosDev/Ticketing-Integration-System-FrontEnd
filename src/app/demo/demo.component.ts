import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class Pastebin {
 
  id: number;
  title: string;
  language: string;
  paste: string;

  constructor(values: Object = {}) {
      Object.assign(this, values);
}

}

export const Languages = ["Ruby","Java", "JavaScript", "C", "Cpp"];
