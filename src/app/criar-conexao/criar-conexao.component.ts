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
  public endpoint = String;
  

  addClient(){
    console.log(this.clientName);
  }

  constructor(private router: Router) { }
  

  ngOnInit() {
  }

}
