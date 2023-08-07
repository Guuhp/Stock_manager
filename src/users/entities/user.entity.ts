import { StatusAccount } from 'src/enums/StatusAccount';

export class User {
  id?: string;
  email: string;
  password: string;
  employeeId: string;
  statusAccount: StatusAccount;
  created_at?: string;
  updated_at?: string;
}
