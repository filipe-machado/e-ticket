import HttpClient from '../api/http-client-base';

export interface MarketProps {
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

export default class MarketServices extends HttpClient {
  private static classInstance?: MarketServices;

  private constructor() {
    // dá pra passar um json de argumento assim: { ContentType: 'application/json' }
    super('http://localhost:3000');
  }

  public static getInstance(): MarketServices {
    if (!this.classInstance) {
      this.classInstance = new MarketServices();
    }

    return this.classInstance;
  }

  public getMarkets = () => this.instance.get<MarketProps[]>('/markets');

  public getMarket = (id: string) => this.instance.get<MarketProps>(`/markets/${id}`);
}
