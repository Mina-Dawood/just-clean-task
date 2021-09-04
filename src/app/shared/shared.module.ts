import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from './pipes/decimal.pipe';
import { CardComponent, DropDownComponent, IconComponent, LoaderComponent } from '.';

const COMPONENTS = [
  CardComponent,
  DropDownComponent,
  IconComponent,
  LoaderComponent
];

const PIPES = [
  DecimalPipe
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  exports: [...COMPONENTS, ...PIPES],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
