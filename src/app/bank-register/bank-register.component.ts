import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-bank-register',
  templateUrl: './bank-register.component.html',
  styleUrls: ['./bank-register.component.scss']
})
export class BankRegisterComponent implements OnInit {
  bank: any;
  agency: string = '';
  accountNumber: string = '';

  constructor(private router: Router, private accountService: AccountService) {
    const navigation = this.router.getCurrentNavigation();
    this.bank = navigation?.extras?.state?.['bank'];
  }

  ngOnInit(): void {
    if (!this.bank) {
      // Se não há banco selecionado, redirecione de volta para a lista de bancos
      this.router.navigate(['/bank-list']);
    }
  }

  registerAccount(): void {
    const account = {
      bankCode: this.bank.code,
      agency: this.agency,
      accountNumber: this.accountNumber
    };
    this.accountService.addAccount(account);
    this.router.navigate(['/home']);
  }

  navigateBack(): void {
    this.router.navigate(['/home']);
  }
}
