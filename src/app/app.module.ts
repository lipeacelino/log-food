import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { AuthService } from './login/auth.service';
import { DashPedidosComponent } from './dashboard/dash-pedidos/dash-pedidos.component';
import { DashProdutosComponent } from './dashboard/dash-produtos/dash-produtos.component';
import { LojasComponent } from './lojas/lojas.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    DashPedidosComponent,
    DashProdutosComponent,
    LojasComponent,
    ProdutoComponent,
    CarrinhoComponent,
    ConfirmacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
