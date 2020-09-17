import { Injectable } from '@angular/core';
import { Order } from '../constants/order.constants';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderList: Order[] = [
    {
      customerName: 'Rachel Green',
      orderdItems: 2,
      amount: 300,
      status: 'In Progress',
      items: [
        { name: 'Hot dog', price: 100 },
        { name: 'Lentil soup', price: 200 },
      ],
      address: {
        addressLine1: '#123, sharadha house,',
        addressLine2: 'Teachers colony, koramnagala'
      }
    },

    {
      customerName: 'Joey Tribbiani',
      orderdItems: 3,
      amount: 500,
      status: 'Completed',
      items: [
        { name: 'Italian Salad', price: 100 },
        { name: 'Italian Torte', price: 200 },
        { name: 'Italian Wonderpot', price: 200 },
      ],
      address: {
        addressLine1: '#123, sharadha house,',
        addressLine2: 'Teachers colony, koramnagala'
      }
    },

    {
      customerName: 'Chandler Bing',
      orderdItems: 3,
      amount: 400,
      status: 'Completed',
      items: [
        { name: 'Cream pie', price: 100 },
        { name: 'Muesli', price: 200 },
        { name: 'Currywurst', price: 100 },
      ],
      address: {
        addressLine1: '#123, sharadha house,',
        addressLine2: 'Teachers colony, koramnagala'
      }
    },
  ];

  constructor() { }
}
