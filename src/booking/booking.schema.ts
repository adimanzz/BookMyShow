import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Schema as MongooseSchema } from 'mongoose';
import { Shows, ShowsDocument } from 'src/shows/shows.schema';
import { User, UserDocument } from 'src/user/user.schema';

@ObjectType()
@Schema()
export class Booking {
    @Field(() => ID)
    id: Types.ObjectID;

    @Field(() => User)
    @Prop({type:MongooseSchema.Types.ObjectID, ref: User.name, autopopulate: true})
    user: UserDocument;

    @Field(() => Shows)
    @Prop({type:MongooseSchema.Types.ObjectID, ref: Shows.name, autopopulate: true})
    show: ShowsDocument;

}

export interface BookingDocument extends Document {
    date: string;
    time: string;
    user: UserDocument | User['id'];
    show: ShowsDocument | Shows['id'];
}

export interface BookingPopulatedDocument extends BookingDocument {
    user: UserDocument;
    show: ShowsDocument;
}


export const BookingSchema = SchemaFactory.createForClass(Booking);