import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Blog extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  detailBody: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true, default: new Date() })
  datePosted: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
