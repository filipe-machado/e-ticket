import HttpClient from '../api/http-client-base';

export interface Data {
  id: number;
  name: string;
  country: string;
  city: string;
  region: string;
  zip: string;
  address: string;
  district: string;
  number: number;
}
export interface MarketProps {
  data: Data[];
}

export default class MarketServices extends HttpClient {
  private static classInstance?: MarketServices;

  private constructor() {
    // dá pra passar um json de argumento assim: { ContentType: 'application/json' }
    super('https://my-json-server.typicode.com/filipe-machado/ticket-db');
  }

  public static getInstance(): MarketServices {
    if (!this.classInstance) {
      this.classInstance = new MarketServices();
    }

    return this.classInstance;
  }

  public getMarkets = (): MarketProps | unknown => this.instance.get<MarketProps>('/markets');

  public getMarket = (id: string): MarketProps | unknown => this.instance.get<MarketProps>(`/markets/${id}`);
}
