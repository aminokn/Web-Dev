import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { VacancyTopTenComponent } from './vacancy-top-ten/vacancy-top-ten.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyDetailsComponent,
    CompanyVacanciesComponent,
    VacanciesComponent,
    VacancyDetailsComponent,
    VacancyTopTenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
