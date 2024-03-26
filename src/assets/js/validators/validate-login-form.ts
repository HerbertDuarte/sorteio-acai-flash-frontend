export function validateLoginForm(form:any) : boolean{
 if(!validarEmail(form.email)){
   return false
 }
 if(form.password.length < 6){
   return false
 }
 return true
}
function validarEmail(email: string) {
 // Expressão regular para validar o formato de um email
 var re = /\S+@\S+\.\S+/;
 return re.test(email);
}