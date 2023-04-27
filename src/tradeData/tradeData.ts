/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TradeDataService {
  private readonly baseUrl = 'https://api.coinmarketcap.com/v2';

  async getTradeData(): Promise<any> {
    const symbol = 'BTCUSDT';
    const url = `https://api.binance.com/api/v3/trades?symbol=${symbol}`;

    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        throw new Error('Failed to fetch data');
      });
  }
}
