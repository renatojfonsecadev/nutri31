import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CepResponse } from './cep-response';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient
  ) { }

    //ur caminho para acessar API correios
    wcep = 'https://viacep.com.br/ws/'

    consultaCep(cep: string) {
      return this.http.get<CepResponse>(`${this.wcep}/${cep}/json/`);
    }
}
