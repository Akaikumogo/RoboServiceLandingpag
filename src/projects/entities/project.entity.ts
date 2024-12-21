import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
  @Prop({ type: String, required: true, maxlength: 255 })
  projectName: string;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: Date, required: true })
  endDate: Date;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: [String] })
  images: string[];

  @Prop({ type: [Number] })
  employeeIds: number[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
