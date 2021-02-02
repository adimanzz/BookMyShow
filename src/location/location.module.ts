import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationResolver } from './location.resolver';
import { Location, LocationSchema } from './location.schema';
import { LocationService } from './location.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Location.name, schema: LocationSchema}])
  ],
  providers: [LocationResolver, LocationService],
  exports: [LocationService]
})
export class LocationModule {}
