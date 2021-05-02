import axios, { AxiosInstance } from 'axios'

export abstract class Api {
  protected client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: 'http://cdict.ru/api'
    })
  }
}
