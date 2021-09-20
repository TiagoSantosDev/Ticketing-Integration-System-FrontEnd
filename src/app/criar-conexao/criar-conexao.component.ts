import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client';

@Component({
  selector: 'app-criar-conexao',
  templateUrl: './criar-conexao.component.html',
  styleUrls: ['./criar-conexao.component.css']
})
export class CriarConexaoComponent implements OnInit {

  public clientName: String;
  public clientInitials: String;
  public connectionName: String;
  public endpoint: String;
  public client: String;

  public submitMessage: String;

  ClientList: Array<Client> = [
    {name:'Primark',initials:'PRK',connectionName:'CN1',endpoint:'1'},
    {name:'Sears',initials:'SRS',connectionName:'CN2',endpoint:'2'},
    {name:'Wiggle',initials:'WGL',connectionName:'CN3',endpoint:'3'},
  ];

  addClient(){
    if(this.clientName != "" && this.clientInitials != "" && this.connectionName != "" && this.endpoint != ""){
      this.submitMessage = "Client successfully added";

      this.clientName= "";
      this.clientInitials= "";
      this.connectionName= "";
      this.endpoint= "";
    }else{
      this.submitMessage = "One or more fields are empty. All fields are required";
    }

  }

  eraseMessage(){
    this.submitMessage = "";
  }

  constructor(private router: Router) { }
  

  ngOnInit() {
  }

}
