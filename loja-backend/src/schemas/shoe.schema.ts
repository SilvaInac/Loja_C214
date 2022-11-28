import * as mongoose from 'mongoose';

export const ShoeSchema = new mongoose.Schema({
    name: String,
    price: String,
    shoppingCart: Boolean
    }
)