import { Component, OnInit } from '@angular/core';
import {Aluno} from '../Aluno'
import {Turma} from '../Turma'
import {AlunoRelatorio} from './AlunoRelatorio'
import {RelatorioTurma} from './TurmaRelatorio'
import {RelatorioService} from './relatorio.service'

@Component({
  selector: 'app-relatorio',
  template: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

   constructor(private relatorioService: RelatorioService) { }
  
   aluno: Aluno = new Aluno();
   alunos: AlunoRelatorio[]=[];
   relatTurma: RelatorioTurma[]=[];
   
   getAlunosFromRelatorio(from: RelatorioTurma): AlunoRelatorio[] {
	   return from.alunos;
   }
   
   getNumAlunos(from: RelatorioTurma): number {
	   return from.alunos.length; 
   }
  
  getRelatoriosAnteriores(): RelatorioTurma[] {
	  return this.relatorioService.getRelatoriosTurmasAnteriores()
  }
  

  ngOnInit(): void {
     this.relatorioService.getRelatoriosTurmasAnteriores()
         .then(as => this.relatTurma = as)
         .catch(erro => alert(erro));
		 
   }

}

