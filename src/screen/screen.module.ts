import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScreenResolver } from './screen.resolver';
import { Screens, ScreenSchema } from './screen.schema';
import { ScreenService } from './screen.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Screens.name, schema: ScreenSchema}]),
  ],
  providers: [ScreenResolver, ScreenService],
  exports: [ScreenService]
})
export class ScreenModule {}
