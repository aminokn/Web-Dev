import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8001'
  constructor(private client: HttpClient) { }

  getVacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`)
  }
  getVacancy(id: number): Observable<Vacancy>{
    return this.client.get<Vacancy>(`${this.BASE_URL}/vacancies/${id}`)
  }
  getTopVacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/top_ten/`)
  }
}
