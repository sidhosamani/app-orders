import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderModalComponent } from '../../components/order-modal/order-modal.component';

import { Order } from '../../constants/order.constants';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  public orderList: Order[];
  public displayedColumns: string[] = ['customerName', 'orderdItems', 'amount', 'status'];
  public status = ['In Progress', 'Completed'];

  constructor(
    private orderService: OrderService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.orderList = this.orderService.orderList;
  }

  openDialog(order): void {
    const dialogRef = this.dialog.open(OrderModalComponent, {
      width: '600px',
      data: { order }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
