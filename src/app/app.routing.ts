import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { LojasComponent } from './lojas/lojas.component';
import { ProdutoComponent } from './produto/produto.component';

const APP_ROUTES: Routes = [
    //as rotas devem ser colocadas aqui
    { path: '', component: HomeComponent, /*canActivate: [AuthGuard]*/},
    { path: 'home', component: HomeComponent, /*canActivate: [AuthGuard]*/},
    { path: 'login', component: LoginComponent, /*canActivate: [AuthGuard]*/},
    { path: 'lojas', component: LojasComponent, /*canActivate: [AuthGuard]*/},
    { path: 'produto', component: ProdutoComponent, /*canActivate: [AuthGuard]*/}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);