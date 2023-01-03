//Tabs
function mostrartabs (executionContext) {
    debugger;
var formContext = executionContext.getFormContext();
var envios = formContext.getAttribute("address1_shippingmethodcode").getValue();
var tabs = formContext.ui.tabs.get("SUMMARY_TAB"); /* La variable tabs lo que va a hacer es traer en este caso
el tabs de la entidad de contacto el tab es :Resumen --> documents_sharepoint
*/ 
var grid = formContext.ui.controls.get("contactopportunitiesgrid"); //Para la sub cuaricula de formulario de Contacto es: OPORTUNIDADES RECIENTES --> contactopportunitiesgrid
var secc = tabs.sections.get("CONTACT_INFORMATION"); //seccion ---> INFORMACIÓN DE CONTACTO --> CONTACT_INFORMATION
if (envios ==1){
tabs.setVisible(true); //El tab sea visible
}
else if (envios==2)
{
tabs.setVisible(false); //El tab no sea visible
}
else if(envios==4){
secc.setVisible(true);
}
else if (envios==5){
secc.setVisible(false);
}
else if (envios==6){
grid.setVisible(true);
}
else if (envios==7){
grid.setVisible(false);
}
}
function opcionesformulario (executionContext) {
var formContext = executionContext.getFormContext();
var formulario = formContext.ui.getFormType(); //Esta variable es para la interfaz de usuario 
if (formulario ==0){
    alert ("Sin definir"); //formtype, funciona para validar 
}
else if (formulario==1){
    alert ("Crea");
}
else if (formulario==2){
    alert("Actualizar");
}
else if (formulario==3){
alert("Solo Lectura");
}
else if (formulario==4){
alert("Deshabilitado");
}
}
//Se obtiene informacion del formulario
function obteberinformacion (executionContext) {
var formContext = executionContext.getFormContext();
var forms = formContext.ui.formSelector; //contrae informacion del formulario
var formactual = forms.getCurrentItem(); //contrae informacion actual del formulario
var todosforms = forms.items.get(); //contrae informacion de todos los formularios 
var nombre = formactual.getLabel();
alert(nombre);
}
/*

*/
