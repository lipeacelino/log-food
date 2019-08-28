import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules, ROUTES } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LojasComponent } from './lojas/lojas.component';

import { routing } from './app.routing';
import { AuthService } from './login/auth.service';
import { DashPedidosComponent } from './dashboard/dash-pedidos/dash-pedidos.component';
import { DashProdutosComponent } from './dashboard/dash-produtos/dash-produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { DetalhesPedidosComponent } from './dashboard/dash-pedidos/detalhes-pedidos/detalhes-pedidos.component';
import { AddProdutosComponent } from './dashboard/dash-produtos/add-produtos/add-produtos.component';
import { EditProdutosComponent } from './dashboard/dash-produtos/edit-produtos/edit-produtos.component';
import { DashHomeComponent } from './dashboard/dash-home/dash-home.component';
import { PedidosComponent } from './usuario/pedidos/pedidos.component';
import { DetalhesPedidoUsuarioComponent } from './usuario/pedidos/detalhes-pedido/detalhes-pedido-usuario.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { EditarPerfilComponent } from './usuario/perfil/editar-perfil/editar-perfil.component';
import { HeaderService } from './header/header.service';
import { LojaComponent } from './lojas/loja/loja.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PedidoComponent } from './pedido/pedido.component';
import { SharedModule } from './shared/shared.module';

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
    ConfirmacaoComponent,
    DetalhesPedidosComponent,
    AddProdutosComponent,
    EditProdutosComponent,
    DashHomeComponent,
    PedidosComponent,
    DetalhesPedidoUsuarioComponent,
    CadastroUsuarioComponent,
    PerfilComponent,
    EditarPerfilComponent,
    LojaComponent,
    MenuItemComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [{provide : LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
