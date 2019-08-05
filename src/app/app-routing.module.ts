import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' },
  { path: 'usuario', loadChildren: './login/usuario/usuario.module#UsuarioPageModule' },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' },
  { path: 'cadastro-usuario', loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'carac-pais', loadChildren: './carac-pais/carac-pais.module#CaracPaisPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
