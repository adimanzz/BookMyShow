import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@ObjectType()
@Schema()
export class Location{
    @Field(() => ID)
    id: Types.ObjectID;

    @Field()
    @Prop()
    city: string;

    @Field()
    @Prop()
    subRegion: string;

    @Field()
    @Prop()
    pincode: number;

}

export type LocationDocument = Location & Document;

export const LocationSchema = SchemaFactory.createForClass(Location);