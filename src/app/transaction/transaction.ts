import { Account} from '../account/account';

export class Transaction{
    idTransaction: number;
    type: string;
    amount: string;
    amountSign: string;
    accountId: Account;
}