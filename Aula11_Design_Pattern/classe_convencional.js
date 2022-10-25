//CLASSE CONVENCIONAL

class Filme {
    constructor (title, year, genre){
        this.title = title
        this.year = year
        this.genre = genre
    }

    getData(){
        return this.title + " " + this.year + " " + this.genre
    }

    getTitle(){
        return this.title
    }
    getYear(){
        return this.year
    }
    getGenre(){
        return this.genre
    }
}

const filme = new Filme('Titanic', 1997, 'Romance')

console.log(filme.getTitle(), filme.getYear(), filme.getGenre())
console.log(filme.getData())