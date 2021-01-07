import HttpClient from '../api/http-client-base';

export interface Data {
  id: string;
  user: string;
  name: string;
}

export interface UserProps {
  data: Data[],
}

export default class UserServices extends HttpClient {
  private static classInstance?: UserServices;

  private constructor() {
    // dá pra passar um json de argumento assim: { ContentType: 'application/json' }
    super('https://my-json-server.typicode.com/filipe-machado/ticket-db');
  }

  public static getInstance(): UserServices {
    if (!this.classInstance) {
      this.classInstance = new UserServices();
    }

    return this.classInstance;
  }

  public getUsers = (): UserProps | unknown => this.instance.get<UserProps>('/users');

  public getUser = (id: string): UserProps | unknown => this.instance.get<UserProps>(`/users/${id}`);

  public postUser = (data: Data): UserProps | unknown => this.instance.post<UserProps>('/users', { data });
}
