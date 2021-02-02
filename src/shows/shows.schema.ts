import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Schema as MongooseSchema } from 'mongoose';
import { Movie, MovieDocument } from 'src/movie/movie.schema';
import { Screens, ScreensDocument } from 'src/screen/screen.schema';

@ObjectType()
@Schema()
export class Shows {
    @Field(() => ID)
    id: Types.ObjectID;

    @Field()
    @Prop()
    date: string;

    @Field()
    @Prop()
    time: string;

    @Field(() => Screens)
    @Prop({type:MongooseSchema.Types.ObjectID, ref: Screens.name, autopopulate: true})
    screen: ScreensDocument;

    @Field(() => Movie)
    @Prop({type:MongooseSchema.Types.ObjectID, ref: Movie.name, autopopulate: true})
    movie: MovieDocument;

}

export interface ShowsDocument extends Document {
    date: string;
    time: string;
    screen: ScreensDocument | Screens['id'];
    movie: MovieDocument | Movie['id'];
}

export interface ShowsPopulatedDocument extends ShowsDocument {
    screen: ScreensDocument;
    movie: MovieDocument;
}


export const ShowsSchema = SchemaFactory.createForClass(Shows);