import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Worker extends Document {
  @Prop({ type: String, required: true, maxlength: 255 })
  name: string;

  @Prop({ type: String, required: true })
  image: string;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
