import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './movie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Movie.name, schema: MovieSchema}])
  ],
  providers: [MovieService, MovieResolver]
})

export class MovieModule {}
