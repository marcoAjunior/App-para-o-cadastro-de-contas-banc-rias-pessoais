import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accounts: any[] = [];

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    // Recuperar dados do localStorage
    const storedAccounts = localStorage.getItem('accounts');
    if (storedAccounts) {
      this.accounts = JSON.parse(storedAccounts);
    }
  }

  loadAccounts(): void {
    this.accounts = this.accountService.getAccounts();
  }

  navigateToBankList(): void {
    this.router.navigate(['/bank-list']);
  }

  // Método para redirecionar para a página de cadastro
  navigateToBankRegister(): void {
    this.router.navigate(['/bank-register']);
  }
}
