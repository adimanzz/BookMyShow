import { Args, ID, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Booking } from './booking.schema';
import { BookingService } from './booking.service';
import { Types } from 'mongoose';
import { BookingInput } from './booking.input';
import { ScreenService } from 'src/screen/screen.service';

@Resolver()
export class BookingResolver {
    constructor(
         private readonly bookingService: BookingService,
         private readonly screenService: ScreenService
        ) {}

    @Query(() => [Booking])
    async bookings(){
        return await this.bookingService.getAll();
    }

    @Query(() => Booking)
    async booking(@Args({name: 'id', type: () => ID}) id:Types.ObjectId){
        return await this.bookingService.getById(id);
    }

    @Mutation(() => Booking)
    async addBooking(@Args({name: 'input'}) input: BookingInput){
        // const id = input.show.screen.id;
        // await this.screenService.updateById(id, {'availableSeats': input.show.screen.availableSeats - 1})
        return await this.bookingService.create(input);
    }

    @Mutation(() => Booking)
    async updateBooking(@Args({name: 'id', type: () => ID}) id: Types.ObjectId, @Args({name: 'input'}) input: BookingInput){
        return await this.bookingService.updateById(id, input);
    }
} 
