import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule',
    canLoad: [NoAuthGuard]
  },
  {
    path: '',
    loadChildren: './modules/main/main.module#MainModule',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
