/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PriceService {
  async getPriceData(): Promise<any> {
    try {
      const response = await axios.get(
        'https://api.binance.com/api/v3/ticker/24hr',
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching Binance data: ${error.message}`);
      throw error;
    }
  }
}
