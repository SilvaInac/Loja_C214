import { ShoesController } from './shoes.controller';
import { ShoeServices } from './shared/shoe.services/shoe.services';
import { Module } from '@nestjs/common';

@Module({
    controllers: [ShoesController],
    providers: [ShoeServices],
})
export class ShoesModule {}
