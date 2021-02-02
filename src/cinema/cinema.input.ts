import { InputType, Field, ID } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class CinemaInput {

    @Field()
    name: string;

    @Field(() => ID)
    location: Types.ObjectID;

}