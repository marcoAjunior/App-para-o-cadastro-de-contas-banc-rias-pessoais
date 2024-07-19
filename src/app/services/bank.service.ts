import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private apiUrl = 'https://brasilapi.com.br/api/banks/v1';

  constructor(private http: HttpClient) { }

  getAllBanks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBankByCode(code: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${code}`);
  }
}
