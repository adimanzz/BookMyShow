import { Args, ID, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Location } from './location.schema';
import { LocationService } from './location.service';
import { Types } from 'mongoose';
import { LocationInput } from './location.input';

@Resolver()
export class LocationResolver {
    constructor( private readonly locationService: LocationService) {}

    @Query(() => [Location])
    async locations(){
        return await this.locationService.getAll();
    }

    @Query(() => Location)
    async location(@Args({name: 'id', type: () => ID}) id:Types.ObjectId){
        return await this.locationService.getById(id);
    }

    @Mutation(() => Location)
    async addLocation(@Args({name: 'input'}) input: LocationInput){
        return await this.locationService.create(input);
    }

    @Mutation(() => Location)
    async updateLocation(@Args({name: 'id', type: () => ID}) id: Types.ObjectId, @Args({name: 'input'}) input: LocationInput){
        return await this.locationService.updateById(id, input);
    }
} 
