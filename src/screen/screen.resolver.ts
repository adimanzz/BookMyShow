import { Args, ID, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Screens } from './screen.schema';
import { ScreenService } from './screen.service';
import { Types } from 'mongoose';
import { ScreenInput } from './screen.input';

@Resolver()
export class ScreenResolver {
    constructor( private readonly screenService: ScreenService) {}

    @Query(() => [Screens])
    async screens(){        
        return await this.screenService.getAll();
    }

    @Query(() => Screens)
    async screen(@Args({name: 'id', type: () => ID}) id:Types.ObjectId){
        return await this.screenService.getById(id);
    }

    @Mutation(() => Screens)
    async addScreen(@Args({name: 'input'}) input: ScreenInput){
        return await this.screenService.create(input);
    }

    @Mutation(() => Screens)
    async updateScreen(@Args({name: 'id', type: () => ID}) id: Types.ObjectId, @Args({name: 'input'}) input: ScreenInput){
        return await this.screenService.updateById(id, input);
    }
} 
