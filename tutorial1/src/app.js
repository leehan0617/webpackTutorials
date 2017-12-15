let books = require('./book');

let str = '';

books.forEach((element, index) => {
   str += '<div>' + element.name + ',' + element.price + ',' + element.author +'</div>';
});

document.getElementById('root').innerHTML = str;
