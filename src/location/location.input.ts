import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LocationInput{
    @Field()
    city: string;

    @Field()
    subRegion: string;

    @Field()
    pincode: number;

}