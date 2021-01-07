import HttpClient from '../api/http-client-base';

interface User {
  id: string;
  user: string;
  name: string;
}

export default class UserServices extends HttpClient {
  private static classInstance?: UserServices;

  private constructor() {
    // dá pra passar um json de argumento assim: { ContentType: 'application/json' }
    super('http://localhost:3000');
  }

  public static getInstance(): UserServices {
    if (!this.classInstance) {
      this.classInstance = new UserServices();
    }

    return this.classInstance;
  }

  public getUsers = () => this.instance.get<User[]>('/users');

  public getUser = (id: string) => this.instance.get<User>(`/users/${id}`);
}
