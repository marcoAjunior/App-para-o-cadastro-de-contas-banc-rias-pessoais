import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Adicione esta linha
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankRegisterComponent } from './bank-register/bank-register.component';
import { HttpClientModule } from '@angular/common/http'; // Certifique-se de que isto está incluído
import { AccountService } from './services/account.service';
import { BankService } from './services/bank.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankListComponent,
    BankRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule, // Adicione esta linha
    HttpClientModule // Adicione esta linha se ainda não estiver incluída
  ],
  providers: [AccountService, BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
