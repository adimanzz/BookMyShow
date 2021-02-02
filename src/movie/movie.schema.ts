import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';


@ObjectType()
@Schema()
export class Movie{
    @Field(() => ID)
    id: Types.ObjectId;

    @Field()
    @Prop()
    title: string;

    @Field()
    @Prop()
    duration: string;

    @Field()
    @Prop()
    genre: string;

    @Field()
    @Prop()
    rating: string;

    @Field()
    @Prop()
    releaseDate: Date;

    @Field()
    @Prop()
    languages: string;

    @Field()
    @Prop()
    format: string;

    @Field()
    @Prop()
    about: string;

}

export type MovieDocument = Movie & Document;

export const MovieSchema = SchemaFactory.createForClass(Movie); 