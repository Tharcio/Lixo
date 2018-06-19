export class Relatorio{
	nomeTurma: string;
	var alunos : [];
	
	gerarRelatorio(alunosRecieve: AlunoService): Relatorio {
		for (let key in alunos){
			var aluno;
			alunos[key] = alunosRecieve;
			
		}		
	}
	
}