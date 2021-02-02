import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/commons/base.service';
import { Cinema, CinemaDocument, CinemaPopulatedDocument } from './cinema.schema';
import { Model } from 'mongoose';

@Injectable()
export class CinemaService extends BaseService<CinemaDocument>{
    constructor(
        @InjectModel(Cinema.name)
        private readonly cinemaModel: Model<CinemaDocument>
    ){
        super(cinemaModel);
    }
}
