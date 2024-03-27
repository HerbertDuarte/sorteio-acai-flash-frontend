export function validateRegisterForm(form : any) : string | false{
 
 if(form.tel.length < 10 || form.tel.length > 11){
   return "Digite um número de telefone válido"
 }
 if(form.cpf.length !== 11){
   return "Digite um CPF válido"
 }
 if(form.name.length === 0){
   return "O campo NOME não pode ser nullo"
 }
 if(form.city.length === 0){
   return "O campo CIDADE não pode ser nullo"
 }
 return false
}