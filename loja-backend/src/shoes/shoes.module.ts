import { ShoesController } from './shoes.controller';
import { ShoeServices } from './shared/shoe.services/shoe.services';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoeSchema } from 'src/schemas/shoe.schema';


@Module({
    imports:[MongooseModule.forFeature([{ name: 'Shoe', schema: ShoeSchema}])],
    controllers: [ShoesController],
    providers: [ShoeServices],
})
export class ShoesModule {}
