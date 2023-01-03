/*Crear un script que se detone al tiempo de agregar el pais Mexico, esto se
hara en el evento del onchange y al agregar el pais "Mexico" se mapee el Codigo postal*/

function eventoonchange (executionContext){
    debugger;
    //Obtener el contexto del formulario
    var formContext = executionContext.getFormContext(); 
    var pais = formContext.getAttribute("address1_country");
    if (pais.getValue()=="Mexico"){
    var codigo = "36210";
    var codigo_postal= formContext.getAttribute("address1_postalcode");
    codigo_postal.setValue(codigo);
    //console.log(codigo_postal);
    } 
}