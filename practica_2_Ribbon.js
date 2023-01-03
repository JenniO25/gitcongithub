function vistavariable (formContext){  //regla de visibilidad
    //Obtener el contexto del formulario
    //var formContext = executionContext.getFormContext(); 
    var metodocontact = formContext.getAttribute("preferredcontactmethodcode").getValue();
    if (metodocontact==3){
        return true;
    }
    else {
        return false;
    }

}

function aparecertelefonos(formContext){
formContext.getControl("telephone1").setVisible(true);   
formContext.getControl("mobilephone").setVisible(true); 
formContext.getControl("fax").setVisible(true); 
}