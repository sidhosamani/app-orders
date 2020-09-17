import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BASE_ROUTE_NAMES, ROUTE_NAMES } from './config/constants/route-names.constants';


const routes: Routes = [
  {
    path: BASE_ROUTE_NAMES.ROOT,
    loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule),
    pathMatch: 'full',
  },
  {
    path: ROUTE_NAMES.ORDER,
    loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
