import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CinemaResolver } from './cinema.resolver';
import { Cinema, CinemaSchema } from './cinema.schema';
import { CinemaService } from './cinema.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Cinema.name, schema: CinemaSchema}]),
  ],
  providers: [CinemaResolver, CinemaService],
  exports: [CinemaService]
})
export class CinemaModule {}
