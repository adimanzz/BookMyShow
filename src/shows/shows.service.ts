import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shows, ShowsDocument } from './shows.schema';
import { Model } from 'mongoose';
import { BaseService } from 'src/commons/base.service';

@Injectable()
export class ShowsService extends BaseService<ShowsDocument>{
    constructor( 
        @InjectModel(Shows.name)
        private readonly showsModel: Model<ShowsDocument>)
    {
        super(showsModel);
    }
}
