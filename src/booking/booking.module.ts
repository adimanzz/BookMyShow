import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScreenModule } from 'src/screen/screen.module';
import { ScreenService } from 'src/screen/screen.service';
import { BookingResolver } from './booking.resolver';
import { Booking, BookingSchema } from './booking.schema';
import { BookingService } from './booking.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Booking.name, schema: BookingSchema}]), ScreenModule
  ],
  providers: [BookingResolver, BookingService],
  exports: [BookingService]
})
export class BookingModule {}
