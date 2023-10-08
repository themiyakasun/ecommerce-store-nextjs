import mongoose, { Schema, model, models } from 'mongoose';

const DealSchema = new Schema({
  img: {
    type: 'String',
  },
});

const Deals = models.Deals || model('Deals', DealSchema);

export default Deals;
