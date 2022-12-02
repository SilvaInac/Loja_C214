import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Get(':id')
    async getById(@Param ('id') id: string):Promise<Shoe>{
        return this.shoeSevice.getById(id);
    }

    @Post()
    async create(@Body() shoe: Shoe):Promise<Shoe>{
        return this.shoeSevice.create(shoe);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() shoe:Shoe):Promise<Shoe>{
        return this.shoeSevice.update(id,shoe);
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        this.shoeSevice.delete(id);
    }


    
}
