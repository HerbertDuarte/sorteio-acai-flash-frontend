export function validateLoginForm(form: any): boolean {
  if (form.username.length === 0) {
    return false;
  }
  if (form.password.length < 6) {
    return false;
  }
  return true;
}
