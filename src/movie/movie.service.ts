import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/commons/base.service';
import { MovieDocument, Movie } from './movie.schema';
import { Model } from 'mongoose';

@Injectable()
export class MovieService extends BaseService<MovieDocument> {
    constructor(
        @InjectModel(Movie.name)
        private readonly movieModel: Model<MovieDocument>
    ){
        super(movieModel);
    }


}
