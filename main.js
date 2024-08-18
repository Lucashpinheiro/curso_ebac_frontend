function Instrumento(nome){
    this.nome = nome;
    this.venda = function(){
        console.log(this.nome + " A venda no site");
    }
}

function Cordas(nome, quantasCordas, acustico, eletrico){
    this.quantasCordas = quantasCordas;
    this.acustico = acustico;
    this.eletrico = eletrico;

    Instrumento.call(this, nome);
}

function Percusao(nome, ferragens, peles, tambores, pecasAdicionais) {
    this.ferragens = ferragens;
    this.peles = peles;
    this.tambores = tambores;
    this.pecasAdicionais = pecasAdicionais;

    Instrumento.call(this, nome);

}

function Sopro(nome, madeira, palheta, embocadura) {
    this.madeira= madeira;
    this.palheta = palheta;
    this.embocadura = embocadura;

    Instrumento.call(this, nome);
}

const instumento1 = new Cordas("Guitarra", 7, false, true);
const instumento2 = new Percusao("Bateria", true, true, 6, true);
const instrumento3 = new Sopro("Flauta", false, "Simples", "Fechadas");

console.log(instumento1);
console.log(instumento2);
console.log(instrumento3);
