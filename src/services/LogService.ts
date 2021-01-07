import HttpClient from '../api/http-client-base';

export interface LogProps {
  id: number;
  description: string;
}

export default class LogServices extends HttpClient {
  private static classInstance?: LogServices;

  private constructor() {
    // dá pra passar um json de argumento assim: { ContentType: 'application/json' }
    super('http://localhost:3000');
  }

  public static getInstance(): LogServices {
    if (!this.classInstance) {
      this.classInstance = new LogServices();
    }

    return this.classInstance;
  }

  public getLogs = (): LogProps | unknown => this.instance.get<LogProps[]>('/logs');

  public getLog = (id: number): LogProps | unknown => this.instance.get<LogProps>(`/logs/${id}`);

  public postLog = (description: string): LogProps | unknown => this.instance.post<LogProps>('/logs', { description });
}
