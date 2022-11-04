import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PacienteListComponent,
    CardapioComponent,
    PacienteEditComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
