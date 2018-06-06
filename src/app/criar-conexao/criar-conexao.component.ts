import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conexao',
  templateUrl: './criar-conexao.component.html',
  styleUrls: ['./criar-conexao.component.css']
})
export class CriarConexaoComponent implements OnInit {

  public client: String;
  public connection: String;
  public endpoint: String;
  

  addClient(){
    console.log(this.connection);
    console.log(this.client);
    console.log(this.endpoint);

  }

  constructor(private router: Router) { }
  

  ngOnInit() {
  }

}
