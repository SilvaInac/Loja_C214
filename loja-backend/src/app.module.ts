import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoesModule } from './shoes/shoes.module';
import { MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://SilvaInac:mBnxFdulVt4VdEd7@cluster0.tmsuv7f.mongodb.net/?retryWrites=true&w=majority'),
    ShoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
