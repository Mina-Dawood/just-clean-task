import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGES_CONFIG, AuthenticationGuard } from './shared';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: PAGES_CONFIG.home.name,
    pathMatch: 'full'
  }, {
    path: PAGES_CONFIG.home.name,
    component: HomeComponent
  },
  {
    path: PAGES_CONFIG.items.name,
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./modules/items/items.module').then(m => m.ItemsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
