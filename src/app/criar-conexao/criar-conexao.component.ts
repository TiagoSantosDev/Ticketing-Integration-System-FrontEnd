import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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



  Clients: Array<String> = [
    "Primark", "Sears", "Wiggle"
  ];

  addClient(){
    console.log(this.connectionName);
    console.log(this.clientName);
    console.log(this.endpoint);


    if(this.clientName != ""){
      this.submitMessage = "Client successfully added";

      this.clientName= "";
      this.clientInitials= "";
      this.connectionName= "";
      this.endpoint= "";
    }else{
      this.submitMessage = "One or more fields are empty. All fields are required";
    }

    
  }

  constructor(private router: Router) { }
  

  ngOnInit() {
  }

}
