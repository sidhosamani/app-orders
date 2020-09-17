export class Order {
    customerName: string;
    orderdItems: number;
    amount: number;
    status: string;
    items: Item[];
    address: Address;
}

export class Item {
    name: string;
    price: number;
}

// Orders usualy happen from the same city so, no need of state and city..
export class Address {
    addressLine1: string;
    addressLine2: string;
}