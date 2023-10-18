
//  DOC document object model ->va a ser un objeto en JS , por lo tanto va a tener propiedades y comportamientos asociados -->
// Es una forma mas sencilla de una variable en JS de traer una abstraccion de mi domento de html-->
// cajon se adecua al tipo de dato
const nombre= "Akari";
let edad="22";
// tipo de cajon

const Salem= {
    raza:"Gato",
    noPatas:4,
    puedehablar:true,
    color:"Negro"


}
// Gato.color="Negro"

//alert('Hola mundo')
console.log("hola mundo", nombre)
// document.write("hola mundo")

//para hacer secuencia con letras
let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Hola soy Akari Montoya')
    .pauseFor(100)
    .deleteAll()
    .typeString('Bienvenido a mi e-portfolio')
    .pauseFor(100)
    .deleteAll()
    .typeString('Te invito a conocer más de mí')
    .pauseFor(100)
    .deleteAll()
    .start();