import { Module } from '@nestjs/common';
import { RestaurantResolver } from './restaurants.resover';

@Module({
  providers: [RestaurantResolver],
})
export class RestaurantsModule {}
