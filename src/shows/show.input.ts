import { Field, ID, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Movie } from 'src/movie/movie.schema';
import { Screens } from 'src/screen/screen.schema';


@InputType()
export class ShowsInput {
    @Field()
    date: string;

    @Field()
    time: string;

    @Field(() => ID)
    screen: Types.ObjectID;

    @Field(() => ID)
    movie: Types.ObjectID;

}