import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type projectDocument = project & Document;

@Schema({ timestamps: true })
export class project {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop()
  deadline?: Date;
}

export const projectSchema = SchemaFactory.createForClass(project);
