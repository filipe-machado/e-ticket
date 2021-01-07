import axios, { AxiosInstance } from 'axios';

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string, headers?: Record<string, unknown>) {
    this.instance = axios.create({
      baseURL,
      headers,
    });
  }
}

export default HttpClient;
