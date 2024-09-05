import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly detailBody: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  readonly datePosted: Date;
}
