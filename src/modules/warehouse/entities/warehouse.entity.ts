import { User } from "src/modules/users/entities/user.entity";

export class Warehouse {
    id?: string;
    name: string;
    code:number
    telephone: string;
    users: User[]
  
    created_at?: string;
    updated_at?: string;
}
