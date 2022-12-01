import { Injectable } from '@nestjs/common';
import { Shoe } from '../shoe/shoe';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose' 

@Injectable()
export class ShoeServices {

    constructor(@InjectModel('Shoe') private readonly shoeModel: Model<Shoe>) { }

    async getAll(){
      return await this.shoeModel.find().exec();
    }
    async getByCart(){
      return await this.shoeModel.find().where('shoppingCart').equals('true').exec();
    }
  
    async getById(id: string)
    {
      return await this.shoeModel.findById(id).exec();
    }
  
    async create(shoe: Shoe)
    {
      const createShoe = new this.shoeModel(shoe);
      return await createShoe.save();
    }
  
    async update(id: string, shoe: Shoe)
    {
      await this.shoeModel.updateOne({_id:id}, shoe).exec()
      return this.getById(id);
    }
  
    async delete(id: string)
    {
      return await this.shoeModel.deleteOne({_id:id}).exec();
    }

}
