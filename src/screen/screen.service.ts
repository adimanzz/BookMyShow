import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/commons/base.service';
import { Screens, ScreensDocument, ScreenPopulatedDocument } from './screen.schema';
import { Model } from 'mongoose';

@Injectable()
export class ScreenService extends BaseService<ScreensDocument> {
    constructor(
        @InjectModel(Screens.name)
        private readonly screenModel: Model<ScreensDocument>
    ){
        super(screenModel);
    }
}
