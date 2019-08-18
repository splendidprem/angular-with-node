import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatListModule
  ]
})
export class ProductsModule { }
