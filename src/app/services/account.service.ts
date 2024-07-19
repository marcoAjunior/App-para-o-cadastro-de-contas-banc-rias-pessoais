import { Injectable } from '@angular/core';

interface Account {
  name: string;
  bank: string;
  // Adicione outros campos conforme necessário
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountsKey = 'accounts';

  constructor() { }

  getAccounts(): any[] {
    const accounts = localStorage.getItem(this.accountsKey);
    return accounts ? JSON.parse(accounts) : [];
  }

  addAccount(account: any): void {
    const accounts = this.getAccounts();
    accounts.push(account);
    localStorage.setItem(this.accountsKey, JSON.stringify(accounts));
  }
}