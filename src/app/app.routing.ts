import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { DashPedidosComponent } from './dashboard/dash-pedidos/dash-pedidos.component';
import { DashProdutosComponent } from './dashboard/dash-produtos/dash-produtos.component';
import { LojasComponent } from './lojas/lojas.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';


const APP_ROUTES: Routes = [
    //as rotas devem ser colocadas aqui
    { path: '', component: HomeComponent, /*canActivate: [AuthGuard]*/},
    { path: 'home', component: HomeComponent, /*canActivate: [AuthGuard]*/},
    { path: 'login', component: LoginComponent },
    { path: 'p/pedidos', component: DashPedidosComponent },
    { path: 'p/produtos', component: DashProdutosComponent },
    { path: 'login', component: LoginComponent, /*canActivate: [AuthGuard]*/},
    { path: 'lojas', component: LojasComponent, /*canActivate: [AuthGuard]*/},
    { path: 'produto', component: ProdutoComponent, /*canActivate: [AuthGuard]*/},
    { path: 'carrinho', component: CarrinhoComponent, /*canActivate: [AuthGuard]*/},
    { path: 'confirmacao', component: ConfirmacaoComponent, /*canActivate: [AuthGuard]*/}




];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);