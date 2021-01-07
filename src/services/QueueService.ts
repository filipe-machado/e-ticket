import HttpClient from '../api/http-client-base';

interface Data {
  id: number;
  value: string;
}

export interface QueueProps {
  data: Data[];
}

export default class QueueServices extends HttpClient {
  private static classInstance?: QueueServices;

  private constructor() {
    // dá pra passar um json de argumento assim: { ContentType: 'application/json' }
    super('https://my-json-server.typicode.com/filipe-machado/ticket-db');
  }

  public static getInstance(): QueueServices {
    if (!this.classInstance) {
      this.classInstance = new QueueServices();
    }

    return this.classInstance;
  }

  public getQueues = (): QueueProps | unknown => this.instance.get<QueueProps>('/queues');

  public getQueue = (id: string): QueueProps | unknown => this.instance.get<QueueProps>(`/queues/${id}`);
}
