import {Aluno} from '../Aluno'
import {Turma} from '../Turma'
import {AlunoRelatorio} from './AlunoRelatorio'


export class RelatorioTurma{
	nomeTurma: string;
	alunos: AlunoRelatorio[] =[];
	
	constructor(nomeT: string){
		this.nomeTurma = nomeT
	}
	
	gerarRelatorioAlunoUm(from: Aluno): void {
		var newAluno = new AlunoRelatorio();
		newAluno.nome=from.nome;
		newAluno.media=from.calculaMedia();
		newAluno.presença=from.presença;
		newAluno.stts=from.stts;
		this.alunos.push(newAluno);
	}
	
	gerarRelatorioAluno(nome: string, media: number, presença: number, stts: string): void {
		var aluno=new AlunoRelatorio(nome,media,presença,stts);
		this.alunos.push(aluno);
	}
	
	gerarRelatorioFinal(from: Turma): void{
		this.nomeTurma=from.nome;
		var alunosRecieved = from.alunos;
		for (let i in from){
			this.gerarRelatorioAlunoUm(alunosRecieved[i]);
		}
	}
	
	/* gerarRelatorio(alunosRecieve: AlunoService): Relatorio {
		for (let key in alunos){
			var aluno;
			alunos[key] = alunosRecieve;
			
		}		
	} */
}