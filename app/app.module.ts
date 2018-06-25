import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlunoService } from './aluno.service';
import { AppComponent } from './app.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    RelatorioComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }