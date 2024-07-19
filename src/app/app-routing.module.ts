import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankRegisterComponent } from './bank-register/bank-register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bank-list', component: BankListComponent },
  { path: 'bank-register', component: BankRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
