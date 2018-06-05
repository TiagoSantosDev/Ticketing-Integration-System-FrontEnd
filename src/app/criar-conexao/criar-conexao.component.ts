import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conexao',
  templateUrl: './criar-conexao.component.html',
  styleUrls: ['./criar-conexao.component.css']
})
export class CriarConexaoComponent implements OnInit {
  

  constructor(private router: Router) { }
  

  ngOnInit() {
  }

}
