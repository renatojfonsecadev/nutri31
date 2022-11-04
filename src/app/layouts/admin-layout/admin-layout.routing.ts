import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { PacienteListComponent } from 'app/paciente-list/paciente-list.component';
import { CardapioComponent } from 'app/cardapio/cardapio.component';
import { PacienteEditComponent } from 'app/paciente-edit/paciente-edit.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'paci-list',     component: PacienteListComponent },
    { path: 'paciente-edit/:id', component: PacienteEditComponent},
    { path: 'cardapio',     component: CardapioComponent },
    { path: 'alimentos',     component: CardapioComponent },
];
