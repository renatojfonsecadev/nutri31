import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CepService } from '../shared/cep/cep.service';
import { CepResponse } from '../shared/cep/cep-response';
import { RestApiService } from "../shared/paciente/paciente.service";
@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.css']
})
export class PacienteEditComponent implements OnInit {
  cep: CepResponse={} as CepResponse

  id = this.actRoute.snapshot.params['id'];
  pacienteData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private cepService: CepService
  ) {
  }

  ngOnInit() {
    this.restApi.getPaci(this.id).subscribe((data: {}) => {
      this.pacienteData = data;
      this.pacienteData.dataatual = new Date();
    })
  }

calculaIMC() {
    let waltura:number = this.pacienteData.altura;
    let wpeso:number = this.pacienteData.peso;

    let wimc = wpeso / (waltura*waltura);
   // this.pacienteData.imc = wimc.toFixed(2);
   if (wimc < 18.5)
{
    this.pacienteData.imc = wimc.toFixed(1) + "- Abaixo do peso normal";
}
else if (wimc < 24.9)
{
    this.pacienteData.imc = wimc.toFixed(1) + "- Peso normal";
}
else
{
    this.pacienteData.imc = wimc.toFixed(1) + "- Excesso de Peso";
}
}

// Consulta CEP - Busca Endereço  
consomeCep(){
    this.cepService.consultaCep(this.pacienteData.cep).subscribe(cepResponse=>{
    this.cep=cepResponse
    this.pacienteData.logradouro = this.cep.logradouro
    this.pacienteData.complemento = this.cep.complemento
    this.pacienteData.localidade = this.cep.localidade
    this.pacienteData.bairro = this.cep.bairro
    this.pacienteData.uf = this.cep.uf
  })
}

  

  // Atualiza dados do Paciente
  updatePaciente() {
    if(window.confirm('Tem certeza que deseja alterar?')){
      this.restApi.updatePaci(this.id, this.pacienteData).subscribe(data => {
        this.router.navigate(['/paci-list'])
      })
    }
  }
  
}
