export function validateWebLoginForm(form: any): string | false {
  if (form.cpf.length !== 11) {
    return "Digite um CPF válido";
  }
  return false;
}
