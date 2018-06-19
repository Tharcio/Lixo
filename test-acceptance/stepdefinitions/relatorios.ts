import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));
let sameMedia = ((elem, media) => elem.element(by.name('nomelist')).getText().then(text => text === media));
let sameStatus = ((elem, stts) => elem.element(by.name('nomelist')).getText().then(text => text === stts));
let samePresença = ((elem, presença) => elem.element(by.name('nomelist')).getText().then(text => text === presença));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou na pagina Relatorios Turma$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('IpManager');
        await $("a[name='RelatoriosTurma']").click();
		var alunos: AlunoService();
    })
	
	Given(/^existe o aluno "([^\"]*)" com notas "(\d*)", "(\d*)", "(\d*)", "(\d*)" nas lista e "(\d*)", "(\d*)" nas provas, e "(\d*)" de presença $/,
	async (nome, lst1,lst2,lst3,lst4,av1,av2,pr) => {
		var aluno: new Aluno(nome);
		aluno.atribuiNotas(lst1,lst2,lst3,lst4,av1,av2);
		aluno.presença(66);
		turma.newAluno(aluno);
		alunos.
	});
	
	When(/^eu peço o relatorio de turmas anteriores$/, async () => {
		await element(by.buttonText("Relatório de Turmas Antigas")).click();
	});
	
	When(/^eu peço os relatorios da turma atual $/, async () => {
		await element(by.buttonText("Relatório de Turmas Atual")).click();
	});
	
	Then(/^aparece o aluno "([^\"]*)", media "(\d*)", presença "(\d*)" e status "([^\"]*)"$/, async (nome,media,pres,stt) => {
		var alunos : ElementArrayFinder = element.all(by.name('relatorioturma'));
		alunos.filter(elem => pAND(sameName(elem,name))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
	
	});

})
