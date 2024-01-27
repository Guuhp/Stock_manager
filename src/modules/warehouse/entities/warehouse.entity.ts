import { AssociateUserWarehouse, Deposit } from "@prisma/client";

export class Warehouse {
    id?: string;
    name: string;
    code:number
    telephone: string;
    users: AssociateUserWarehouse[]
    Deposit: Deposit[]
  
    created_at?: string;
    updated_at?: string;
}
