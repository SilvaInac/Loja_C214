import { Controller, Get } from '@nestjs/common';
import { ShoeServices } from './shared/shoe.services/shoe.services';
import { Shoe } from './shared/shoe/shoe';

@Controller('shoes')
export class ShoesController {

    constructor(private shoeSevice: ShoeServices){

    }

    @Get()
    async getAll():Promise<Shoe[]>{
        return this.shoeSevice.getAll();
    }
}
