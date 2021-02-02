import { Args, ID, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Cinema } from './cinema.schema';
import { CinemaService } from './cinema.service';
import { Types } from 'mongoose';
import { CinemaInput } from './cinema.input';

@Resolver()
export class CinemaResolver {
    constructor( private readonly cinemaService: CinemaService) {}

    @Query(() => [Cinema])
    async cinemas(){
        return await this.cinemaService.getAll();
    }

    @Query(() => Cinema)
    async cinema(@Args({name: 'id', type: () => ID}) id:Types.ObjectId){
        return await this.cinemaService.getById(id);
    }

    @Mutation(() => Cinema)
    async addCinema(@Args({name: 'input'}) input: CinemaInput){
        return await this.cinemaService.create(input);
    }

    @Mutation(() => Cinema)
    async updateCinema(@Args({name: 'id', type: () => ID}) id: Types.ObjectId, @Args({name: 'input'}) input: CinemaInput){
        return await this.cinemaService.updateById(id, input);
    }
} 
