import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Schema as MongooseSchema} from 'mongoose';
import { Location, LocationDocument } from 'src/location/location.schema';

@ObjectType()
@Schema()
export class Cinema {
    @Field(() => ID)
    id: Types.ObjectID;

    @Field()
    @Prop()
    name: string;

    @Field(() => Location)
    @Prop({type: MongooseSchema.Types.ObjectID,  ref: Location.name, autopopulate: true })
    location: LocationDocument;

}

export interface CinemaDocument extends Document {
    name: string;
    location: LocationDocument | Location['id'];
}

export interface CinemaPopulatedDocument extends CinemaDocument {
    location: LocationDocument;
}

export const CinemaSchema = SchemaFactory.createForClass(Cinema);