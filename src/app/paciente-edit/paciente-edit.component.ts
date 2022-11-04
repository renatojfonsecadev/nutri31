import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.css']
})
export class PacienteEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  pacienteData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }
  ngOnInit() {
    this.restApi.getPaci(this.id).subscribe((data: {}) => {
      this.pacienteData = data;
    })
  }
  // Atualiza dados do Paciente
  updateEmployee() {
    if(window.confirm('Tem certeza que deseja alterar?')){
      this.restApi.updatePaci(this.id, this.pacienteData).subscribe(data => {
        this.router.navigate(['/paci-list'])
      })
    }
  }
}
