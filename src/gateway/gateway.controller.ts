/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiSecurity } from '@nestjs/swagger';
import { PriceService } from 'src/price/price.service';
import { TradeDataService } from 'src/tradeData/tradeData';
import { LoggerInterceptor } from 'src/interceptor/logger.interceptor';

@UseInterceptors(LoggerInterceptor)
@Controller('gateway')
export class GatewayController {
  constructor(
    private readonly priceService: PriceService,
    private readonly tradeDataService: TradeDataService,
  ) {}
  @Get('prices')
  getBinanceData() {
    return this.priceService.getPriceData();
  }
  @Get('trades')
  getNewsData() {
    return this.tradeDataService.getTradeData();
  }
}
