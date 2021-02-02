import { InputType, Field } from "@nestjs/graphql";


@InputType()
export class MovieInput{
    @Field()
    title: string;

    @Field()
    duration: string;

    @Field()
    genre: string;

    @Field()
    rating: string;

    @Field()
    releaseDate: Date;

    @Field()
    languages: string;

    @Field()
    format: string;

    @Field()
    about: string;

}