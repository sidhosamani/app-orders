import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './pages/order-list/order-list.component';

const appRoutes: Routes = [
    { path: '', component: OrderListComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class OrderRoutingModule { }