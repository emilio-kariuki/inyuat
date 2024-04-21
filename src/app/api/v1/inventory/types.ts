export interface Inventory {
    id:            string;
    inventoryNumber:   string;
    total:         number;
    userId:        string;
    supplierId:     string;
    quantity:      number;
    createdAt:     Date;
    updatedAt:     Date;
    product:    Product[];
}

export interface Product {
    id:          string;
    name:        string;
    quantity:    number;
    quanlity:    QUALITY;
    description: string;
    inventoryId: string;
    createdAt:   Date;
    updatedAt:   Date;
}

enum QUALITY {
    GOOD = "GOOD",
    FAIR = "FAIR",
    REJECT = "REJECT"
}