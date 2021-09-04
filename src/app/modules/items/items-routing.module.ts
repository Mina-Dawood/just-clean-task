import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGES_CONFIG } from '@app/shared';
import { ItemsComponent } from './items.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: '',
        redirectTo: PAGES_CONFIG.items.children.itemList.name,
        pathMatch: 'full'
      },
      {
        path: PAGES_CONFIG.items.children.itemList.name,
        component: ItemListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
