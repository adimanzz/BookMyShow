import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/commons/base.service';
import { BookingDocument, Booking } from './booking.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookingService extends BaseService<BookingDocument> {
    constructor(
        @InjectModel(Booking.name)
        private readonly bookingModel: Model<BookingDocument>
    ){
        super(bookingModel);
    }


}
