import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  banks: any[] = [];
  searchCode: string = '';

  constructor(private bankService: BankService, private router: Router) { }

  ngOnInit(): void {
    this.bankService.getAllBanks().subscribe((data: any[]) => {
      this.banks = data;
    });
  }

  searchBank(): void {
    if (this.searchCode) {
      this.bankService.getBankByCode(this.searchCode).subscribe((data: any) => {
        this.banks = [data];
      });
    }
  }

  selectBank(bank: any): void {
    this.router.navigate(['/bank-register'], { state: { bank } });
  }
}
