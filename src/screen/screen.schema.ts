import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Schema as MongooseSchema} from 'mongoose';
import { Cinema, CinemaDocument } from 'src/cinema/cinema.schema';

@ObjectType()
@Schema()
export class Screens {
    @Field(() => ID)
    id: Types.ObjectID;

    @Field()
    @Prop()
    screenNumber: number;

    @Field()
    @Prop()
    availableSeats: number;

    @Field(() => Cinema)
    @Prop({type: MongooseSchema.Types.ObjectID,  ref: Cinema.name, autopopulate: true })
    cinema: CinemaDocument;

}

export interface ScreensDocument extends Document {
    screenNumber: number;
    availableSeats: number;
    cinema: CinemaDocument | Cinema['id'];
}

export interface ScreenPopulatedDocument extends ScreensDocument {
    cinema: CinemaDocument;
}

export const ScreenSchema = SchemaFactory.createForClass(Screens);