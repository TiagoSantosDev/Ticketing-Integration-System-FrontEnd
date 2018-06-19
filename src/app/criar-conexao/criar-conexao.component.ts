import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conexao',
  templateUrl: './criar-conexao.component.html',
  styleUrls: ['./criar-conexao.component.css']
})
export class CriarConexaoComponent implements OnInit {

  public clientName: String;
  public connectionName: String;
  public endpoint: String;

  //public Connection: Connection[] = [];
  

  addClient(){
    console.log(this.connectionName);
    console.log(this.clientName);
    console.log(this.endpoint);

  }

  constructor(private router: Router) { }
  

  ngOnInit() {
  }

}
