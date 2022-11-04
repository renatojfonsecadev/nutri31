import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  Paciente: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadPaci();
  }
  // Get - lista de Pacientes
  loadPaci() {
    return this.restApi.getPacientes().subscribe((data: {}) => {
      this.Paciente = data;
    });
  }
  // Delete Paciente
  deleteEmployee(id: any) {
    if (window.confirm('Tem certeza que deseja Excluir este Paciente?')) {
      this.restApi.deletePaci(id).subscribe((data) => {
        this.loadPaci();
      });
    }
  }


}
