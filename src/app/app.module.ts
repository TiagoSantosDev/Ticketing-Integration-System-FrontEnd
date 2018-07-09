import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { LoginComponent } from './login/login.component';

import { ClientesService } from './services/clientes.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './services/register.service';
import { ManageBoardComponent } from './manage-board/manage-board.component';
import { CriarConexaoComponent } from './criar-conexao/criar-conexao.component';
import { EditarConexaoComponent } from './editar-conexao/editar-conexao.component';
import { EditarMapeamentoComponent } from './editar-mapeamento/editar-mapeamento.component';
import { ConsultarHistoricoComponent } from './consultar-historico/consultar-historico.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    LoginComponent,
    RegisterComponent,
    ManageBoardComponent,
    CriarConexaoComponent,
    EditarConexaoComponent,
    EditarMapeamentoComponent,
    ConsultarHistoricoComponent,
  ],
  providers: [AuthGuard,
    AuthenticationService,
    MessageService,
    RegisterService,
    ClientesService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
