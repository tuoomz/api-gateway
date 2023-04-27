/* eslint-disable @typescript-eslint/no-unused-vars */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GatewayController } from './gateway/gateway.controller';
import { PriceService } from './price/price.service';
import { TradeDataService } from './tradeData/tradeData';
import { AuthMiddleware } from './auth.middleware';

@Module({
  imports: [],
  controllers: [GatewayController],
  providers: [PriceService, TradeDataService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
