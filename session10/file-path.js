const path = require ('path')

const notes = '/users/joe/notes.txt'

console.log(path.dirname (notes))
console.log(path.basename (notes))
console.log(path.extname (notes))
console.log(path.basename (notes, path.extname(notes)))