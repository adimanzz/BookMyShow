import {  Field, ID, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class ScreenInput {
    @Field()     
    screenNumber: number;

    @Field()     
    availableSeats: number;

    @Field(() => ID)
    cinema: Types.ObjectID;

}