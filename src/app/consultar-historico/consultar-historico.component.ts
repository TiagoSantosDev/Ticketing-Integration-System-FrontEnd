import { Component, OnInit } from '@angular/core';
import { Log } from "../models/log";

@Component({
  selector: 'app-consultar-historico',
  templateUrl: './consultar-historico.component.html',
  styleUrls: ['./consultar-historico.component.css']
})
export class ConsultarHistoricoComponent implements OnInit {

  aa: Array<Object> = [{
    test : [{value: "aaa"}, {value:"bbb"}, {value:"ccc"}]
  }];

  response: Array<Object> = [{ text: ['hello', 'world']}];


  LogList: Array<Log> = [
    {id:'001',incident_nr:'001OLR',date:'2018',status:'Y',httpcode:'404'},
    {id:'002',incident_nr:'002OLR',date:'2018',status:'N',httpcode:'200'}
  ];

  Log: Array<String> = ['a','b','c'];

  constructor() { }

  ngOnInit() {
  }


}
