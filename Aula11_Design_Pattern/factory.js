//Implementar uma factory function
//NÃO eh uma Classe: NÃO possui um construtor, mas mesmo assim retorna um objeto novo.
//Sem utilizar "new" p/ instanciar

// FACTORY - Deixar o codigo mais sucinto
const Filme = (title, year, genre) => ({
    title,
    year,
    genre,
    getData: () => ({title, year, genre})
})

const filme = Filme('Titanic', 1997, 'Romance')  // NÃO precisa do "new"
console.log(filme.getData())                     // retorna o objeto Filme