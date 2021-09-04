import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemHeaderComponent } from './item-header/item-header.component';
import { TranslateModule } from '@ngx-translate/core';

const COMPONENTS = [
  ItemsComponent,
  ItemListComponent,
  ItemHeaderComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class ItemsModule { }
