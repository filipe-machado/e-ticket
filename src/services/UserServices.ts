export default class UserServices {
  user: string;

  pass: string;

  constructor(user: string, pass: string) {
    this.user = user;
    this.pass = pass;
  }

  public isAuthenticated(): boolean {
    return this.user === 'user' && this.pass === '1234';
  }
}
