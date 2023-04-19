import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { VacancyTopTenComponent } from './vacancy-top-ten/vacancy-top-ten.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id', component: CompanyDetailsComponent},
  { path: 'companies/:id/vacancies', component: CompanyVacanciesComponent },
  { path: 'vacancies', component: VacanciesComponent},
  { path: 'vacancies/:id', component: VacancyDetailsComponent },
  { path: 'top_ten', component: VacancyTopTenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
