import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../../constants/order.constants';
import { OrderListComponent } from '../../pages/order-list/order-list.component';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {

  public items: Item[];
  public displayedColumns: string[] = ['name', 'price'];
  constructor(
    public dialogRef: MatDialogRef<OrderListComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.items = this.data.order.items;
    // this.items.push({ name: 'Total Price', price: this.data.order.amount });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
