import { Module } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { ShowsResolver } from './shows.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Shows, ShowsSchema } from './shows.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Shows.name, schema: ShowsSchema}])
  ],
  providers: [ShowsService, ShowsResolver],
  exports: [ShowsService]
})

export class ShowsModule {} 
