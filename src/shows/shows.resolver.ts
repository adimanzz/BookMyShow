import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShowsInput } from './show.input';
import { Shows } from './shows.schema';
import { ShowsService } from './shows.service';
import { Types } from 'mongoose';

@Resolver()
export class ShowsResolver {
    constructor( private readonly showsService: ShowsService) {}

    @Query(() => [Shows])
    async shows(){
        return await this.showsService.getAll();
    }

    @Query(() => Shows)
    async show(@Args({name: 'id', type: () => ID}) id:Types.ObjectId){
        return await this.showsService.getById(id);
    }

    @Mutation(() => Shows)
    async addShows(@Args({name: 'input'}) input: ShowsInput){
        return await this.showsService.create(input);
    }

    @Mutation(() => Shows)
    async updateShows(@Args({name: 'id', type: () => ID}) id: Types.ObjectId, @Args({name: 'input'}) input: ShowsInput){
        return await this.showsService.updateById(id, input);
    }
}
