import { Mutation, Args, Resolver, ID, Query } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { User } from './user.schema';
import { UserService } from './user.service';
import { UserInput } from './user.input';

@Resolver()
export class UserResolver {
    constructor( private readonly userService: UserService) {}

    @Query(() => [User])
    async users() {
        return await this.userService.getAll();
    }

    @Query(() => User)
    async user(@Args({name: 'id', type: () => ID}) id: Types.ObjectId){
        return await this.userService.getById(id);
    }

    @Mutation(() => User)
    async addUser(@Args({name: 'input'}) input: UserInput){
        return await this.userService.create(input);
    }

    @Mutation(() => User)
    async updateUser(@Args({name: 'id', type: () => ID}) id: Types.ObjectId, @Args({name:'input'}) input: UserInput){
        return await this.userService.updateById(id, input);
    }
}
