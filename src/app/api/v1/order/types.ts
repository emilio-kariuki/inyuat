export interface Order {
    id:            string;
    orderNumber:   string;
    status:        string;
    total:         number;
    userId:        string;
    address:       string;
    customerName:  string;
    customerPhone: string;
    customerEmail: string;
    createdAt:     Date;
    updatedAt:     Date;
    orderItems:    OrderItem[];
}

export interface OrderItem {
    id:          string;
    name:        string;
    description: string;
    image:       string;
    orderId:     string;
    quantity:    number;
    price:       number;
    createdAt:   Date;
    updatedAt:   Date;
}