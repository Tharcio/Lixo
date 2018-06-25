

export class AlunoRelatorio{
	nome: string;
	media: number;
	presença: number;
	stts: string;

	constructor(nome: string,media: number,presença: number,stts: string) {
		this.nome=nome;
		this.media=media;
		this.presença=presença;
		this.stts=stts;
	}
	
}
