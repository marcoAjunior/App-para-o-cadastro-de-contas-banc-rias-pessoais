import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  banks: any[] = [];
  searchCode: string = '';
  foundBanks: any[] = [];

  constructor(private bankService: BankService, private router: Router) { }

  ngOnInit(): void {
    this.bankService.getAllBanks().subscribe((data: any[]) => {
      this.banks = data;
    });
  }

  searchBank(): void {
    // Adiciona log para depuração
    console.log('Código de banco buscado:', this.searchCode);
    console.log('Lista de Bancos:', this.banks);

    // Converte searchCode para número, se necessário
    const searchCodeNumber = Number(this.searchCode);

    // Filtra a lista de bancos
    this.foundBanks = this.banks.filter(bank => bank.code === searchCodeNumber);
    console.log('Bancos encontrados:', this.foundBanks);

    if (this.foundBanks.length === 0) {
      Swal.fire({
        title: 'Código de Banco Não Encontrado',
        text: 'O código do banco digitado não existe.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  selectBank(bank: any): void {
    this.router.navigate(['/bank-register'], { state: { bank } });
  }
}
