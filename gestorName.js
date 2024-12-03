function run(name) {

var gestorAtendente = name.split("%",1);

gestorAtendente = gestorAtendente.toString();

return FirstLetter(gestorAtendente);

}



// Somente a 1ª letra em Maiúscula


function FirstLetter(string) {

return string.charAt(0).toUpperCase() + string.slice(1);

}
