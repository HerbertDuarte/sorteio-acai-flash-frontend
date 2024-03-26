export function validateRegisterForm(form : any) : boolean{
 if(form.cep.length !== 8){
   return false
 }
 if(form.tel.length < 10 || form.tel.length > 11){
   return false
 }
 if(form.cpf.length !== 11){
   return false
 }
 if(form.num.length === 0){
   return false
 }
 if(form.neighborhood.length === 0){
   return false
 }
 if(form.name.length === 0){
   return false
 }
 if(form.log.length === 0){
   return false
 }
 if(form.city.length === 0){
   return false
 }
 return true
}