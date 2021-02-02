import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/commons/base.service';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService extends BaseService<UserDocument> {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>,
    ) {
        super(userModel);
    }
}
