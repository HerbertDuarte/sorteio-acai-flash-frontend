export function validateLoginForm(form: any): string | false {
  if (form.username.length === 0) {
    return "Digite um nome de usuário";
  }
  if (form.password.length < 6) {
    return "A senha precisa ter no mínimo 6 dígitos";
  }
  return false;
}
