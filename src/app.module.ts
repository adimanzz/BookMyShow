import { Module } from '@nestjs/common';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { MovieModule } from './movie/movie.module';
import { ShowsModule } from './shows/shows.module';
import { LocationModule } from './location/location.module';
import { CinemaModule } from './cinema/cinema.module';
import { ScreenModule } from './screen/screen.module';
import { BookingModule } from './booking/booking.module';

// My "mongodb+srv://admin:bpiyrutD3KZcsyaw@cluster0.zread.mongodb.net/test?retryWrites=true&w=majority";

// mongodb+srv://admin:H7GKRr6qXbUgnxlo@cluster0.rhzvb.mongodb.net/test?retryWrites=true&w=majority

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:bpiyrutD3KZcsyaw@cluster0.zread.mongodb.net/test?retryWrites=true&w=majority',
      {
        connectionFactory: (connection) => {
          connection.plugin(require('mongoose-autopopulate'));
          return connection;
        },
      
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UserModule,
    MovieModule,
    ShowsModule,
    LocationModule,
    CinemaModule,
    ScreenModule,
    BookingModule,
  ],
  providers: [],
})
export class AppModule {}
