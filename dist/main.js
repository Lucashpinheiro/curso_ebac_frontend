const alunos = [{
  nome: 'Lucas',
  nota: 7
}, {
  nome: 'Giulia',
  nota: 9
}, {
  nome: 'Antonio',
  nota: 2
}];
const notaSeis = alunos.forEach(function (item) {
  if (item.nota >= 6) {
    console.log(item);
  }
});