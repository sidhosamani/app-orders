import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { MaterialModule } from '../../shared/material-module';
import { OrderModalComponent } from './components/order-modal/order-modal.component';


@NgModule({
  declarations: [OrderListComponent, OrderModalComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule
  ]
})
export class OrderModule { }
