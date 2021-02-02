import { Field, ID, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';


@InputType()
export class BookingInput {

    @Field(() => ID)
    user: Types.ObjectID;

    @Field(() => ID)
    show: Types.ObjectID;

}