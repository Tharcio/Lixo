import { RelatorioTurma } from './TurmaRelatorio';
import { AlunoRelatorio } from './AlunoRelatorio'
import { Injectable } from '@angular/core';

let create = () => {
	turma = new RelatorioTurma("2017-1");
	turma.gerarRelatorioAluno("Tharcio",12,70,"aprovado");
};

@Injectable()
export class RelatorioService {
	alunos: AlunoRelatorio[]=[];
	
  constructor() {this.alunos = create; }  
  
  getRelatoriosTurmasAnteriores(): AlunoRelatorio[]{
	  return this.alunos;
  }
  
  
}

