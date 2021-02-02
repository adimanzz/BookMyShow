import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/commons/base.service';
import { Location, LocationDocument } from './location.schema';
import { Model } from 'mongoose';

@Injectable()
export class LocationService extends BaseService<LocationDocument>{
    constructor(
        @InjectModel(Location.name)
        private readonly locationModel: Model<LocationDocument>
    ){
        super(locationModel);
    }
}
