import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';



@ObjectType()
@Schema()
export class User{
    @Field(() => ID)
    id: Types.ObjectId;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    dob: string;

    @Field()
    @Prop()
    gender: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);