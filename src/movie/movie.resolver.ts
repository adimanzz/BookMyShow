import { Args, ID, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Movie } from './movie.schema';
import { MovieService } from './movie.service';
import { Types } from 'mongoose';
import { MovieInput } from './movie.inputs';

@Resolver()
export class MovieResolver {
    constructor( private readonly movieService: MovieService) {}

    @Query(() => [Movie])
    async movies(){
        return await this.movieService.getAll();
    }

    @Query(() => Movie)
    async movie(@Args({name: 'id', type: () => ID}) id:Types.ObjectId){
        return await this.movieService.getById(id);
    }

    @Mutation(() => Movie)
    async addMovie(@Args({name: 'input'}) input: MovieInput){
        return await this.movieService.create(input);
    }

    @Mutation(() => Movie)
    async updateMovie(@Args({name: 'id', type: () => ID}) id: Types.ObjectId, @Args({name: 'input'}) input: MovieInput){
        return await this.movieService.updateById(id, input);
    }
} 
